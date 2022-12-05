import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {

    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://crazy-bikers-server-atik2788.vercel.app/userRole?role=seller', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })
    // console.log(sellers)


    const handleDeleteUser = (seller) => {
        // console.log(seller);

        fetch(`https://crazy-bikers-server-atik2788.vercel.app/usersDelete/${seller._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast(`Delete ${seller.displayName} successfully!!`)
                    refetch()
                }
                else {
                    toast.error(data.message)
                }
            })
    }


    const handleVerifyUser = (seller) => {
        // console.log('verify')

        fetch(`https://crazy-bikers-server-atik2788.vercel.app/usersVerify/${seller._id}`, {
            method: "PUT",
            headers: {
                // 'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast(`Verify seller ${seller.displayName} successfully!!`)
                    refetch()
                }
                else {
                    toast.error(data.message)
                }
            })




        fetch(`https://crazy-bikers-server-atik2788.vercel.app/bikeVerify/${seller.email}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    // toast(`Verify seller ${seller.displayName} successfully!!`)
                    console.log(data.message);
                    refetch()
                }
                else {
                    toast.error(data.message)
                    console.log(data.message);
                }
            })






    }


    return (
        <div className='mt-10'>
            <h3 className='mb-10 text-center text-5xl font-bold text-red-700'>All Sellers</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            sellers?.map((seller, i) =>
                                <tr key={seller._id}>
                                    <th>{i + 1}</th>
                                    <th>{seller.displayName}</th>
                                    <th>{seller.email}</th>
                                    
                                    {seller?.verify !== 'seller' ?
                                        <th><button onClick={() => handleVerifyUser(seller)} className="btn bg-green-800 btn-xs">Verify</button></th>
                                        :
                                        <th><button className="btn btn-disabled btn-xs">Verify</button></th>
                                    }
                                    <th><button onClick={() => handleDeleteUser(seller)} className="btn bg-red-700 btn-xs">Delete</button></th>
                                </tr>

                            )
                        }



                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllSellers;