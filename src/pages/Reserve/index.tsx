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
  if(month>12){month-=12;}
  return new Date(year, month, 0).getDate();
}

function endsWithNumber(str: string) {
  return /[0-9]+$/.test(str);
}

function removeItem(item: any, array: any){
  var index = array.indexOf(item);
    if (index !== -1) {
      array.splice(index, 1);
    }
    return array;
}
const Reserve: React.FC = () => {

  const [barbers, setBarbers] = useState(FakeBarbers);
  const [appointments, setAppointments] = useState(FakeAppointments);
  const [newAppointment, setNewAppointment] = useState(initialAppointment);

  
  let newDateTime = '';
  let current = new Date();
  let day = current.getDate();
  let month = current.getMonth();
  let year = current.getFullYear();


  let days = []
  let numberDaysInMonth = daysInMonth(month+1,year)
    while(day <= numberDaysInMonth){
      days.push(day);
      day++;
    }

  day=1; // reset inicial para começar o proximo mes
  let daysNextMonth = []
  if(month === 11){year++;}
  numberDaysInMonth = daysInMonth(month+2,year)// nao tem prob passar de 12 por que trato na funcao
    while(day <= numberDaysInMonth){
      daysNextMonth.push(day);
      day++;
    }

  const shortMonths = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro','janeiro'];

  const handleBarberChange = (event:any) => {
  setNewAppointment((prevAppointments) => ({...prevAppointments, barberId: event.target.value, dateTime:''}))
  }

  const handleDayChange = (event:any) => {
    if(event.target.value === ''){
  setNewAppointment((prevAppointments) => ({...prevAppointments, dateTime:''}))

    }else{
      let values = event.target.value.split(',');
      if(values[0] < 10) {values[0] = '0' + values[0]}
      if(values[1] < 10) {values[1] = '0' + values[1]}
      newDateTime = `${year}-${values[1]}-${values[0]}T`
      setNewAppointment((prevAppointments) => ({...prevAppointments, dateTime: newDateTime}))
    }
  }

  let hour = 7;
  let hoursAvailable: number[] = [];
  while(hour <= 18){
    hoursAvailable.push(hour)
    hour++;
  }

  //pegando os horarios ocupados e colocando em arrayHoursBusy
  let arrayHoursBusy: string[] = [];
  appointments.map((item) =>(item.dateTime).includes(newAppointment.dateTime)? arrayHoursBusy.push(item.dateTime) : null );
  
  if(arrayHoursBusy.length > 0){
    let aux;
    console.log(arrayHoursBusy);
    arrayHoursBusy.forEach(element => {
      aux = element.split('T')
      //removeItem(aux[1], hoursAvailable);
      var index = hoursAvailable.indexOf(Number(aux[1]));
        if (index !== -1) {
          hoursAvailable.splice(index, 1);
      }
    });
  }

  const handleHourChange = (event:any) => {
    let selectHour = event.target.value;
    if(selectHour < 10 && selectHour !== ''){
      selectHour = '0'+ selectHour
    }
    let oldDate = newAppointment.dateTime.split('T');
    setNewAppointment((prevAppointments) => ({...prevAppointments, dateTime: oldDate[0]+'T' + selectHour}))
  }

  useEffect(()=>{console.log(newAppointment)},[newAppointment])
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
                    <option value="">Selecione o dia</option>

                    {days.map((d) =>
                      (<option key={d} value={[String(d),String(month)]} > 
                        {d} de {shortMonths[month]}
                      </option>)
                    )}

                    {daysNextMonth.map((d) =>
                      (<option key={d} value={[String(d),String(month+1)]}  > 
                        {d} de {shortMonths[month+1]}
                      </option>)
                    )}
                </Section>
                <Section name="hour" required disabled={newAppointment.dateTime.endsWith('T') || endsWithNumber(newAppointment.dateTime) ? false : true} onChange={handleHourChange}>
                    <option value="">Selecione o horário</option>
                    {hoursAvailable.map((h) =>
                      <option key={h} value={String(h)}  > 
                        às {h} horas
                      </option>)
                    }
                    
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

//falta fazer caso a pessoa relesecione um barbeiro ou dia, o prox select retornar para selecione um horario
//perguntar do removeItem
