import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })




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
                            bookings?.map((booking, i) =>
                                    <tr key={booking._id}>
                                    <th>{i+1}</th>
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
                                        <th><button className="btn btn-ghost btn-xs">details</button></th>
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