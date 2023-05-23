import React, { useCallback, useEffect, useState } from 'react';
//import './Home.css';
import { Reserves } from './types';
import { ReserveLine } from '../../components/ReserveLine';
import { MainContainer, ContentContainer } from './styles';
import { FakeAppointments } from './mocks';

const Home: React.FC = () => {
    const [reserves, setReserves] = useState< Reserves[] >([]);
    const loadCustomers = useCallback(async () => {
        const api = 'http://localhost:3000/'
        const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEwNDFkYzcyLWJhMmItNDlhNS04YjJiLTYxNDc1ZmRiMzQyNiIsImlhdCI6MTY4NDMzNTk0NywiZXhwIjoxNjg0NTE1OTQ3fQ.gXEP9OU7Ed-V-cNvev518XuMcA0Inxy11uMdmjLRaQw'
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
        console.log(FakeAppointments)
    return (
      <MainContainer>
        <ContentContainer>
              {FakeAppointments.map(({ id, dateTime, customerId, barberId }) => (
                  <ReserveLine
                  id={id}
                  dateTime={dateTime}
                  customerId={customerId}
                  barberId={barberId}
                  />
                ))
              } 
        </ContentContainer>
      </MainContainer>
    );
  }

export default Home;
