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


function removeItem(item: any, array: any){
  var index = array.indexOf(item);
    if (index !== -1) {
      array.splice(index, 1);
    }
    return array;
}

//criar um obj e jogar os day,month,year etc, igual linha 69
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
  //next month below
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

const shortMonths = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro','janeiro'];
//let hoursAvailable = [7,8,9,10,11,12,13,14,15,16,17,18,19];

const Reserve: React.FC = () => {

  const [barbers, setBarbers] = useState(FakeBarbers);
  const [appointments, setAppointments] = useState(FakeAppointments);
  const [newDateTime, setDateTime] = useState(''); //bo aquii

  const [newAppointment, setNewAppointment] = useState(initialAppointment);
  const [selectedDayFlag, setSelectedDayFlag] = useState(false);
  const [selectedHourFlag, setSelectedHourFlag] = useState(false);
  const[currentDate, setCurrentDate] = useState(emptyDate);
  useEffect(()=>{setCurrentDate(getCurrentDate(currentDate))},[]);

  const[ocupadas, setOcupadas] = useState(['']);
  let busyHours = getBusyHours(appointments, newAppointment);
  
  let auxxxxx ='';
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
        setDateTime(`${year}-${values[1]}-${values[0]}T`);//bo aquii
        
        auxxxxx = `${year}-${values[1]}-${values[0]}T`;
        if(newAppointment.dateTime !== auxxxxx){
          setSelectedHourFlag(true);
        }
        setNewAppointment((prevAppointments) => ({...prevAppointments, dateTime: auxxxxx}));
      }
      setOcupadas(getBusyHours(appointments, newAppointment));
      setSelectedDayFlag(false);//como selecionou horario, torna a flag false
  }

  let hoursAvailable = [7,8,9,10,11,12,13,14,15,16,17,18,19];
  if(busyHours.length > 0){
      let aux;
      busyHours.forEach(element => {
          console.log("ocupadas", element);
          aux = element.split('T')
          var index = hoursAvailable.indexOf(Number(aux[1]));
            if (index !== -1) {
              hoursAvailable.splice(index, 1);
          }
      });
  }

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
  useEffect(()=>{console.log('ocupadas',ocupadas)},[ocupadas])
  
  //useEffect(()=>{console.log(newDateTime)},[newDateTime])
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
                
                <Section name="hour" required disabled={(newAppointment.barberId === '' || newAppointment.dateTime ==='')  ? true : false} onChange={handleHourChange}>
                    <option value="" selected = {selectedHourFlag}>Selecione o horário</option>
                    {hoursAvailable.map((h) =>
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

//falta fazer caso a pessoa relesecione um barbeiro ou dia, o prox select retornar para selecione um horario
//perguntar do removeItem
//<Section name="hour" required disabled={newAppointment.dateTime.endsWith('T') || endsWithNumber(newAppointment.dateTime) ||  ? false : true} onChange={handleHourChange}>//
