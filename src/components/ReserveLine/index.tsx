import React from 'react';
import { ContentContainer, Wrapper } from './style';

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
            <ContentContainer>
                <h1>Dia {dateTime}</h1> 
                <Wrapper/>
                <p>Cliente: {customerId}</p>
                <Wrapper/>
                <p>Barbeiro: {barberId}</p>
            </ContentContainer>
);