import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AdvertiseCard = ({ bike, setBikeInfo }) => {

    const { category, buyYear, postDate, cc, conditionType,
        description, hp, img, location, mobileNumber,
        name, originalPrice, resalePrice, sellersName, yearsOfUse, status, email } = bike;



        const { data: dbUserNew = [], refetch } = useQuery({
            queryKey: ['userDB', email],
            queryFn: async () => {
                const res = await fetch(`http://localhost:5000/userEmail?email=${email}`)
                // const res = await fetch (`http://localhost:5000/userEmail?email=tom8@gmail.com`)
                const data = await res.json()
                refetch()
                return data;
            }
        })
        // console.log(dbUserNew);
    
        // const userEmailDB = (dbUserNew[0].email)
        // console.log(dbUserNew[0])


    return (
        <div>

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='h-72' src={img} alt="bikes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-red-700 fond-bold">{name}</h2>
                <h2 className="text-xl font-bold">Features:</h2>

                <h4 className="text-md font-bold mb-3">Price: ${resalePrice}</h4>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='grid grid-cols-1 gap-2'>
                        <h4 className="text-sm font-bold">Engine: {cc} cc</h4>
                        <h4 className="text-sm font-bold">Condition: {conditionType}</h4>
                        <h4 className="text-sm font-bold">Year of Use: {yearsOfUse}</h4>
                        {/* <h4 className="text-sm font-bold">Seller Name: {sellersName}</h4> */}


                    </div>

                    <div className='grid grid-cols-1 gap-2'>
                        <h4 className="text-sm font-bold">Buy in: {buyYear}</h4>
                        <h4 className="text-sm font-bold">Buying Price: ${originalPrice}</h4>
                        <h4 className="text-sm font-bold">Location: {location}</h4>
                        <h4 className="text-sm font-bold">Post Date: {postDate}</h4>
                    </div>
                </div>

                {dbUserNew[0]?.verify !== 'seller' ?
                                        <h4 className="text-sm font-bold ">Seller Name: {bike.sellersName}</h4>
                                        :
                                        <h4 className="text-sm font-bold mt-3">Seller Name: {bike.sellersName} <span className='bg-green-700 px-2 py-1 rounded-full text-white'>&#x2714;</span>	</h4>
                                    }

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
    );
};

export default AdvertiseCard;