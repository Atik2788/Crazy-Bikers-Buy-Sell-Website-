import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import AdvertiseCard from './AdvertisedCard';
import AdvertiseModal from './AdvertiseModal';

const Advertise = () => {



    const [bikeInfo, setBikeInfo] = useState(null)
    // const url = ('http://localhost:5000/bi')
    const status = 'advertised'


    const { data: bikes = [], refetch } = useQuery({
        queryKey: ['bikesInfo'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/bikesStatus?status=advertised')
            const data = await res.json()
            refetch()
            return data;
        }
    })
    // console.log(bikes);




    return (
        <div>
            <h2 className='text-red-700 text-center text-5xl font-bold mt-16 mb-10'>Advertisement </h2>


            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
                {
                    bikes.map(bike => <AdvertiseCard
                        key={bike._id}
                        bike={bike}
                        setBikeInfo={setBikeInfo}
                    ></AdvertiseCard>
                    )
                }
            </div>


            {bikeInfo &&
                <AdvertiseModal
                    bikeInfo={bikeInfo}
                    setBikeInfo={setBikeInfo}
                    refetch={refetch}
                ></AdvertiseModal>

            }


        </div>
    );
};

export default Advertise;