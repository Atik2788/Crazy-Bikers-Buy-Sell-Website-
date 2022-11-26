import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import MyProductCard from './MyProductCard';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    console.log(user);

    const url = `http://localhost:5000/bikesemail?email=${user?.email}`
    // const urt = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: bikes = [] } = useQuery({
        queryKey: ['bikes', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    console.log(bikes)

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
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            bikes?.map((bike, i) =>
                                <tr key={bike._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={bike.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <th>{bike.name}</th>
                                    <th>${bike.resalePrice}</th>
                                    <th><button className="btn btn-ghost btn-xs">{bike.status}</button></th>
                                    <th><button className="btn bg-red-700 px-4 outline-none btn-xs">X</button></th>
                                </tr>

                            )
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyProducts;