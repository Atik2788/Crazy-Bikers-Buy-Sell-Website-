import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import AdvertiseCard from './AdvertiseCard';
import AdvertiseModal from './AdvertiseModal';

const Advertise = () => {

    const { user } = useContext(AuthContext)
    const userEmail = user?.email;
    // console.log(userEmail);

    const [bikeInfo, setBikeInfo] = useState(null)
    // const url = ('http://localhost:5000/bi')
    const status = 'advertised'


   
    const {data: dbUserNew = [], refetch } = useQuery({
        queryKey: ['userDB', user?.email],
        queryFn: async () => {
            const res = await fetch (`http://localhost:5000/userEmail?email=${user?.email}`)
            // const res = await fetch (`http://localhost:5000/userEmail?email=tom8@gmail.com`)
            const data = await res.json()
            refetch()
            return data;
        }
    })
    // console.log(dbUserNew);

    // const userEmailDB = (dbUserNew[0].email)
    console.log(dbUserNew[0])



    const { data: bikes = [] } = useQuery({
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
                {/* {
                    bikes.map(bike => <AdvertiseCard
                        key={bike._id}
                        bike={bike}
                        user={user}
                        setBikeInfo={setBikeInfo}
                    ></AdvertiseCard>
                    )
                } */}


                {
                    bikes.map(bike => <div
                        key={bike._id}
                    >
                        <div>

                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img className='h-72' src={bike.img} alt="bikes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-red-700 fond-bold">{bike.name}</h2>
                                    <h2 className="text-xl font-bold">Features:</h2>

                                    <h4 className="text-md font-bold mb-3">Price: ${bike.resalePrice}</h4>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <div className='grid grid-cols-1 gap-2'>
                                            <h4 className="text-sm font-bold">Engine: {bike.cc} cc</h4>
                                            <h4 className="text-sm font-bold">Condition: {bike.conditionType}</h4>
                                            <h4 className="text-sm font-bold">Year of Use: {bike.yearsOfUse}</h4>

                                            <h4 className="text-sm font-bold">Seller Name: {bike.sellersName}</h4>
                                            <h4 className="text-sm font-bold">Seller Email: {bike.email}</h4>


                                            {/* {bike.verify ?
                                                <h4 className="text-sm font-bold">Seller Name: {bike.sellersName} verify</h4>
                                                :
                                                <h4 className="text-sm font-bold">Seller Name: {bike.sellersName}</h4>
                                            } */}


                                            {dbUserNew[0]?.verify !== 'seller' ?
                                                <h4 className="text-sm font-bold">Seller Name: {bike.sellersName}</h4>
                                                :
                                                <h4 className="text-sm font-bold">Seller Name: {bike.sellersName} 888</h4>
                                            }



                                        </div>

                                        <div className='grid grid-cols-1 gap-2'>
                                            <h4 className="text-sm font-bold">Buy in: {bike.buyYear}</h4>
                                            <h4 className="text-sm font-bold">Buying Price: ${bike.originalPrice}</h4>
                                            <h4 className="text-sm font-bold">Location: {bike.location}</h4>
                                            <h4 className="text-sm font-bold">Post Date: {bike.postDate}</h4>
                                        </div>
                                    </div>

                                    {status !== 'booked' ?
                                        <label htmlFor="booking-modal"
                                            className="btn bg-red-700 btn-sm mt-3 hover:px-10"
                                            onClick={() => setBikeInfo(bike)}>Book Now
                                        </label>
                                        :
                                        <label
                                            className="btn btn-disabled btn-sm mt-3"
                                        >Booked
                                        </label>
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
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