import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const MyProducts = () => {
    const {usar} = useContext(AuthContext)

    const url = (`http://localhost:5000/bikes?email=${user?.email}`)
    // const url = `http://localhost:5000/bookings?email=${user?.email}`

    const {data} = useQuery({
        queryKey: ['bikes'],
        queryFn: async () => {
            const res = await fetch();
            const data = await res.json();
            return data;
        }
    })
    
    return (
        <div>
            My products
        </div>
    );
};

export default MyProducts;