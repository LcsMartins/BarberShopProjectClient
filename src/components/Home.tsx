import React, { useCallback, useEffect, useState } from 'react';
import './Home.css';
import { Reserves } from './types';
import { ReserveLine } from './reserves';

const Home: React.FC = () => {
    const [reserves, setReserves] = useState< Reserves[] >([]);
    const loadCustomers = useCallback(async () => {
        const api = 'http://localhost:3000/'
        const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEwNDFkYzcyLWJhMmItNDlhNS04YjJiLTYxNDc1ZmRiMzQyNiIsImlhdCI6MTY4NDE1NTI1NywiZXhwIjoxNjg0MzM1MjU3fQ.4gVdOdcmJYDRldIPQmry4GBCdK3toqEooL2DBkgazGw'
        const id ="7c752db7-0461-47c3-a758-7f7500187708"
        const headers = {
          authorization: `Bearer ${token}`,
        };
        //flag: 0 barber and 1 customer
        await fetch(`${api}appointments/${id}?flag=1`, {headers,})   
                .then(response => response.json())
                .then(data => setReserves(data));

        },[]) 
        
        useEffect(()=>{loadCustomers()},[loadCustomers])
        useEffect(()=>{console.log(reserves)},[reserves])

    return (
      <div className="Home">
        {reserves?.map(({ id, dateTime, customerId, barberId }) => (
            <ReserveLine
            id={id}
            dateTime={dateTime}
            customerId={customerId}
            barberId={barberId}
            />
          ))
      }
      </div>
    );
  }

export default Home;
