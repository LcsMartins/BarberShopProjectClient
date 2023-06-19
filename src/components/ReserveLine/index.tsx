import React from 'react';
import { Card, Dados, Image, Wrapper } from './style';
import Will from '../../assets/images/will.jpg'
import printDay from '../../utils/printDay';

interface ReserveProps {
    id: string,
    dateTime: string,
    customerId: string,
    barberId: string,
};

export const ReserveLine: React.ElementType<ReserveProps> = ({
    id,
    dateTime,
    customerId,
    barberId,
}) => (
    <>
        <Card>
            <Image src= {Will}>
            </Image>
            <Dados>
                <p>{barberId}</p>

                <Wrapper/>
                <p> {printDay(dateTime || '0000-0-00T00')}, às {dateTime.split('T')[1]} horas</p> 
                <Wrapper/>
                
            </Dados>
        </Card>
    </>
);