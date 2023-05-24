import React from 'react';
import { CardContainer, Wrapper } from './style';

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
            <CardContainer>
                <p>Horário {dateTime}</p> 
                <Wrapper/>
                <p>Cliente: {customerId}</p>
                <Wrapper/>
                <p>Barbeiro: {barberId}</p>
            </CardContainer>
);