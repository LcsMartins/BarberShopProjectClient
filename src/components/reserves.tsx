import React from 'react';

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
    <div>
        <h1>{id}</h1> 
        <p>{dateTime}</p>
        <p>{customerId}</p>
        <p>{barberId}</p>
    </div>
);