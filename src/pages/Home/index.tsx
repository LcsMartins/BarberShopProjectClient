import React, { useCallback, useEffect, useState } from 'react';
import { Reserves } from './types';
import { ReserveLine } from '../../components/ReserveLine';
import { MainContainer, ContentContainer, SugestaoSection, Aviso, ReserveButton } from './styles';
import { api, token, id } from '../../services/api';
import { useReservesActions } from '../../redux/store/reserve/reserveSlice';

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
    //useEffect(()=>{console.log(reserves)},[reserves])

    const {getReserves, clearReserves} = useReservesActions()
    useEffect(()=>{getReserves()}, [getReserves])

    const testeDiv = []; // alterar p state
    return (
      <MainContainer>
        <ContentContainer>
          {(testeDiv.length === 0) ? (
            <SugestaoSection>
              <Aviso>
                Não há nenhuma reserva vigente, gostaria de reservar um horário?
              </Aviso>
              <ReserveButton href="/reserve">
                Sim, quero reservar um horário
              </ReserveButton>
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

