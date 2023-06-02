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

interface DateInfos{
  hour: number;
  day: number,
  month: number,
  year: number,
  numberDaysThisMonth: number[],
  numberDaysNextMonth: number[],
}

const emptyDate = {
  hour: -1,
  day: -1,
  month: -1,
  year: -1,
  numberDaysThisMonth: [-1],
  numberDaysNextMonth: [-1],
}

function fillDaysMonth(date : DateInfos){
    let daysCount = daysInMonth(date.month+1, date.year);
    let i = date.day

    while((date.numberDaysThisMonth).length > 0){
        date.numberDaysThisMonth.pop();
    }
    while(i <= daysCount){
        date.numberDaysThisMonth.push(i);
        i++;
    }
    //next month maxdays calc below
    if(date.month === 11){
       daysCount = daysInMonth(date.month+2, date.year++);
    }else {
        daysCount = daysInMonth(date.month+2, date.year);
    }

    while((date.numberDaysNextMonth).length > 0){
        date.numberDaysNextMonth.pop();
    }
    i = 1;
    while(i <= daysCount){
        date.numberDaysNextMonth.push(i);
        i++;
    }
}

function getCurrentDate(date : DateInfos){
    let current = new Date();
    date.hour = current.getHours();
    date.day = current.getDate();
    date.month = current.getMonth();
    date.year = current.getFullYear();
    fillDaysMonth(date);
    return date
}

function getBusyHours(appointments : Appointment[], newAppointment: Appointment){
  let busyHours = [''];
  if(newAppointment.dateTime !== ''){
      busyHours.pop();
      appointments.map((item) =>(item.dateTime).includes(newAppointment.dateTime)? busyHours.push(item.dateTime) : null );
  }
  return busyHours;
}

function getAvailableHours(ocupadas : string[]){
    let hoursAvailable = ['7','8','9','10','11','12','13','14'];
    if(ocupadas.length > 1){
        let aux;
        ocupadas.forEach(element => {
            console.log("ocupada:", element);
            aux = element.split('T')
            var index = hoursAvailable.indexOf((aux[1]));
              if (index !== -1) {
                hoursAvailable.splice(index, 1);
            }
        });
    }
    return hoursAvailable;
}
const shortMonths = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro','janeiro'];

const Reserve: React.FC = () => {

  const [barbers, setBarbers] = useState(FakeBarbers);
  const [appointments, setAppointments] = useState(FakeAppointments);

  let [newDateTime, setDateTime] = useState(''); 
  useEffect(()=>{setDateTime(newDateTime)},[newDateTime]);

  const [newAppointment, setNewAppointment] = useState(initialAppointment);
  const [selectedDayFlag, setSelectedDayFlag] = useState(false);
  const [selectedHourFlag, setSelectedHourFlag] = useState(false);

  const [currentDate, setCurrentDate] = useState(emptyDate);
  useEffect(()=>{setCurrentDate(getCurrentDate(currentDate))},[]);

  const[ocupadas, setOcupadas] = useState(['']);
  useEffect(()=>{setOcupadas(getBusyHours(appointments, newAppointment))},[appointments, newAppointment]);

  const[disponiveis,setDisponiveis] = useState(['']);
  useEffect(()=>{setDisponiveis(getAvailableHours(ocupadas))},[ocupadas]);
  

  const handleBarberChange = (event:any) => {
      if(newAppointment.barberId !== event.target.value){
        setSelectedDayFlag(true);
        setSelectedHourFlag(true);
      }
      setNewAppointment((prevAppointments) => ({...prevAppointments, barberId: event.target.value, dateTime:''}))
  }

  const handleDayChange = (event:any) => {
      if(event.target.value === ''){
      setNewAppointment((prevAppointments) => ({...prevAppointments, dateTime:''}))
      }else{
        let values = event.target.value.split(',');
        
        if(values[0] < 10) {values[0] = '0' + values[0]}
        if(values[1] < 10) {values[1] = '0' + values[1]}

        newDateTime = (`${currentDate.year}-${values[1]}-${values[0]}T`);
        
        if(newAppointment.dateTime !== newDateTime){
          setSelectedHourFlag(true);
        }
        setNewAppointment((prevAppointments) => ({...prevAppointments, dateTime: newDateTime}));
      }
      setSelectedDayFlag(false);//como selecionou horario, torna a flag false
  }
 
  //falta adc aqui q caso a pessoa selecione o horario, os horarios ocupados continuem sem aparecer
  const handleHourChange = (event:any) => {
      let selectedHour = event.target.value;
      if(selectedHour < 10 && selectedHour !== ''){
        selectedHour = '0'+ selectedHour
      }
      let oldDate = newAppointment.dateTime.split('T');
      setNewAppointment((prevAppointments) => ({...prevAppointments, dateTime: oldDate[0]+'T' + selectedHour}))
      setSelectedHourFlag(false);
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
                    <option value="" selected = {selectedDayFlag}>Selecione o dia</option>

                    {currentDate.numberDaysThisMonth.map((d) =>
                      (<option key={d} value={[String(d),String(currentDate.month)]} > 
                        {d} de {shortMonths[currentDate.month]}
                      </option>)
                    )}

                    {currentDate.numberDaysNextMonth.map((d) =>
                      (<option key={d} value={[String(d),String(currentDate.month+1)]}  > 
                        {d} de {shortMonths[currentDate.month+1]}
                      </option>)
                    )}
                </Section>
                
                <Section name="hour" required disabled={(newAppointment.barberId === '' || newAppointment.dateTime ==='')  ? true : false} onChange={handleHourChange}>
                    <option value="" selected = {selectedHourFlag}>Selecione o horário</option>
                    {disponiveis.map((h) =>
                      <option key={h} value={String(h)}  > 
                        às {h} horas
                      </option>)
                    }
                </Section>
                <ReservaButton >
                    <ButtonText>Concluir Reserva</ButtonText>
                </ReservaButton>
            </SugestaoSection>
        </MainContainer>
      </div>
    )
  }
export default Reserve;

//perguntar do removeItem
