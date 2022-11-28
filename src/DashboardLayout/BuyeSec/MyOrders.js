import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

import axios from 'axios'
import Loader from '../../Routes/Loader';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const [bookingData, setBookingData] = useState([])
    const [loading, setLoading] = useState(true)



    const url = `http://localhost:5000/bookings?email=${user?.email}`


    useEffect(() => {
        axios.get(url)
            .then(data => {
                // setBookingData(data)
                const bookings = data.data;
                setBookingData(bookings)
                setLoading(false)
                // console.log(bookings)
            })
    })

 if(loading){
    return <Loader></Loader>
 }


    // const { data: bookings = [], refetch } = useQuery({
    //     queryKey: ['bookings', user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(url, {
    //             headers: {
    //                 authorization: `bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         });           
    //         const data = await res.json();            
    //         refetch()
    //         // setLoading(false)
    //         return data;
    //     }
    // })




    return (
        <div className='mt-10'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Bike Image</th>
                            <th>Bike Name</th>
                            <th>Price</th>
                            <th>Paid/Unpaid</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            bookingData?.map((booking, i) =>
                                <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={booking.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <th>{booking.bikeName}</th>
                                    <th>${booking.resalePrice}</th>
                                    <th><button className="btn btn-ghost bg-green-700 text-white text-md px-4 btn-xs">Pay</button></th>
                                </tr>

                            )
                        }



                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyOrders;