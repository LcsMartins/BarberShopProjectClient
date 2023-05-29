import React, { useCallback, useEffect, useState } from 'react';
import { MainContainer, SugestaoSection, Section, ReservaButton, ButtonText, SectionBigger } from './styles';
import { FakeAppointments, FakeBarbers } from './mocks';
const Reserve: React.FC = () => {


  const [barbers, setBarbers] = useState(FakeBarbers);
  const [appointments, setAppointments] = useState(FakeAppointments);
  const [newAppointment, setNewAppointment] = useState();


  // handleChange:function(e){

  // }
  console.log(appointments)
    return (
      <div>
        <MainContainer>
           <SugestaoSection>
                <SectionBigger name="barber" required>
                    <option value="">Selecione o profissional</option>
                    
                    {barbers.map(({barberId}) =>
                     (<option key={barberId} value={barberId}>{barberId}</option>)
                    )}

                </SectionBigger>
                <Section name="day" required>
                    <option>Selecione o dia</option>
                </Section>
                <Section name="hour" required>
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
//carregar todos os barbeiros
//carregar reservas vigentes
//criar o obj da reserva
// qnd o user selecionar algo, vai adc no estado; se a prop tiver vazia, n foi selecioando e ai o prox fica disabled

//fazer o disabled dos forms, qnd selecionar ja adicionar ao estado do obj app criado