import React from 'react';
import { Card, Dados, Image, Wrapper } from './style';
import Will from '../../assets/images/will.jpg'
interface ReserveProps {
    id: string,
    dateTime: string,
    customerId: string,
    barberId: string
};

export const ReserveLine: React.ElementType<ReserveProps> = ({
    id,
    dateTime,
    customerId,
    barberId,
}) => (
        <Card>
            <Image src= {Will}>
            </Image>
            <Dados>
                <p>{barberId}</p>
                <Wrapper/>
                <p> {dateTime}</p> 
                <Wrapper/>
                <p>Concluída</p>
                
            </Dados>
        </Card>
);
