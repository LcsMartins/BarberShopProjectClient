import React, { useCallback, useEffect, useState } from 'react';
import { Reserves } from './types';
import { ReserveLine } from '../../components/ReserveLine';
import { MainContainer, ContentContainer, SugestaoSection, Aviso, ReservaButton } from './styles';
import { api, token, id } from '../../services/api';

const initialAppointment = [{
  id: '',
  dateTime: '',
  customerId:'' ,
  barberId: '',
}]


const Home: React.FC = () => {

    const [reserves, setReserves] = useState< Reserves[] >(initialAppointment);
    const loadReserves = useCallback(async () => {
      const headers = {
          authorization: `Bearer ${token}`,
      };
      //flag: 0 barber and 1 customer
      await fetch(`${api}appointments/${id}?flag=1`, {headers,})   
              .then(response => response.json())
              .then(data => setReserves(data));
    },[]) 

    useEffect(()=>{loadReserves()},[loadReserves])
    useEffect(()=>{console.log(reserves)},[reserves])

    const testeDiv = []; // alterar p state
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
            
              {reserves.map(({ id, dateTime, customerId, barberId }) =>  (
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

