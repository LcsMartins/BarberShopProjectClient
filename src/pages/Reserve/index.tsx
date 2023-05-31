import React, { useCallback, useEffect, useState } from 'react';
import { MainContainer, SugestaoSection, Section, ReservaButton, ButtonText, SectionBigger } from './styles';
import { FakeAppointments, FakeBarbers } from './mocks';
import { stringify } from 'querystring';

interface Appointment{
  id: string,
  dateTime: string,
  customerId: string,
  barberId: string,
}
const initialAppointment = {
  id: '',
  dateTime: '',
  customerId:'' ,
  barberId: '',
}

function daysInMonth(month: number, year: number): number { // Use 1 for January, 2 for February, etc.
  return new Date(year, month, 0).getDate();
}

const Reserve: React.FC = () => {

  const [barbers, setBarbers] = useState(FakeBarbers);
  const [appointments, setAppointments] = useState(FakeAppointments);
  const [newAppointment, setNewAppointment] = useState(initialAppointment);

  

let current = new Date();
let month = current.getMonth()+1;
let year = current.getFullYear();
let hour = current.getHours();

let days = []
let day = current.getDate();
let numberDaysInMonth = daysInMonth(month,year)
  while(day <= numberDaysInMonth){
    days.push(day);
    day++;
  }

let daysNextMonth = []
numberDaysInMonth = daysInMonth(month+1,year)
day=1
  while(day <= numberDaysInMonth){
    daysNextMonth.push(day);
    day++;
  }

const shortMonths = ['janeiro','fevereiro','março','maio','abril','junho','julho','agosto','setembro','novembro','dezembro']

  const handleBarberChange = (event:any) => {
  setNewAppointment((prevAppointments) => ({...prevAppointments, barberId: event.target.value}))
  }

  const handleDayChange = (event:any) => {
    let values = event.target.value.split(',');
    if(values[1] < 10){values[1]='0'+values[1]}
    let newDateTime = `${year}-${values[1]}-${values[0]}T`
    console.log(newDateTime)
    setNewAppointment((prevAppointments) => ({...prevAppointments, dateTime: newDateTime}))
  }

    return (
      <div>
        <MainContainer>
           <SugestaoSection>
                <SectionBigger name="barber" required onChange={handleBarberChange} >
                    <option value="">Selecione o profissional</option>
                  
                    {barbers.map(({barberId}) =>
                     (<option key={barberId} value={barberId}  > 
                        {barberId}
                     </option>)
                    )}

                </SectionBigger>
                <Section name="day" required disabled={newAppointment.barberId === ''? true : false} onChange={handleDayChange} >
                    <option>Selecione o dia</option>

                    {days.map((d) =>
                      (<option key={d} value={[String(d),String(month-1)]} > 
                        {d} de {shortMonths[month-1]}
                      </option>)
                    )}

                    {daysNextMonth.map((d) =>
                      (<option key={d} value={[String(d),String(month)]}  > 
                        {d} de {shortMonths[month]}
                      </option>)
                    )}
                </Section>
                <Section name="hour" required disabled={newAppointment.dateTime === ''? true : false}>
                    <option>Selecione o horário</option>
    
                      
                    
                </Section>
                <ReservaButton>
                    <ButtonText>Concluir Reserva</ButtonText>
                </ReservaButton>
            </SugestaoSection>
        </MainContainer>
      </div>
    )
  }
export default Reserve;