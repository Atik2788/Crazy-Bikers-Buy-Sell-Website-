import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {

    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/userRole?role=seller')
            const data = await res.json()
            return data;
        }
    })
    // console.log(sellers)


    const handleDeleteUser = (seller) =>{
        // console.log(seller);

        fetch(`http://localhost:5000/users/${seller._id}`, {
            method: 'DELETE',
            headers: {

            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount>0){
                toast(`Delete ${seller.displayName} successfully!!`)
                refetch()
            }
        })
    }


    return (
        <div className='mt-10'>
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
                                    <th><button  className="btn bg-green-800 btn-xs">Verify</button></th>
                                    <th><button onClick={() =>handleDeleteUser(seller)} className="btn bg-red-700 btn-xs">Delete</button></th>
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