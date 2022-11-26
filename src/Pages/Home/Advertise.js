import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Advertise = () => {

    const {data} = useQuery({
        queryKey: ['bikes']
    })

    return (
        <div>
            
        </div>
    );
};

export default Advertise;