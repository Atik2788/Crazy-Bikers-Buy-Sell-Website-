import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {

    const [bikeInfo, setBikeInfo] = useState(null)
    // const url = ('http://localhost:5000/bi')

    const { data: bikes = [], refetch } = useQuery({
        queryKey: ['bikesInfo'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/bikes')
            const data = await res.json()
            return data;
        }
    })
    // console.log(bikes);


    return (
        <div>

            <div>
            {
                bikes.map(bike => <AdvertiseCard
                    key={bike._id}
                    bike={bike}
                    setBikeInfo={setBikeInfo}
                ></AdvertiseCard>)
            }
            </div>


        </div>
    );
};

export default Advertise;