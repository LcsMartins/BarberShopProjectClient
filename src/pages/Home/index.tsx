import React, { useCallback, useEffect, useState } from 'react';
import { Reserves } from './types';
import { ReserveLine } from '../../components/ReserveLine';
import { MainContainer, ContentContainer, SugestaoSection, Aviso, ReservaButton } from './styles';
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

        //useEffect(()=>{loadCustomers()},[loadCustomers])
        //useEffect(()=>{console.log(reserves)},[reserves])
        
        // ordenar quando puxar do banco
        // criar func q recebe reserves,
        // verifica ( data > dateNow ) +/-
        // vigenteFlag = 1;
        //dps mapear ordenado já, do mais recente pro mais antigo

        const testeDiv = [];
    return (
      <MainContainer>
        <ContentContainer>
          {(testeDiv.length === 0) ? (
            <SugestaoSection>
              <Aviso>
                Não há nenhuma reserva vigente, gostaria de reservar um horário?
              </Aviso>
              <ReservaButton>
                Sim, reservar agora
              </ReservaButton>
            </SugestaoSection>) : null }
            
              {FakeAppointments.map(({ id, dateTime, customerId, barberId }) =>  (
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

