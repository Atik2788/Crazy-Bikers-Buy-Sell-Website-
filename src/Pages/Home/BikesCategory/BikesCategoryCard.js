import { format } from 'date-fns';
import React, { useState } from 'react';

const BikesCategoryCard = ({ bike, setBikeInfo }) => {
    const { category, buyYear, postDate, cc, conditionType,
        description, hp, img, location, mobileNumber,
        name, originalPrice, resalePrice, sellersName, yearsOfUse, status } = bike;



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
                            <h4 className="text-sm font-bold">Seller Name: {sellersName}</h4>


                        </div>

                        <div className='grid grid-cols-1 gap-2'>
                            <h4 className="text-sm font-bold">Buy in: {buyYear}</h4>
                            <h4 className="text-sm font-bold">Buying Price: ${originalPrice}</h4>
                            <h4 className="text-sm font-bold">Location: {location}</h4>
                            <h4 className="text-sm font-bold">Post Date: {postDate}</h4>
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
    );
};

export default BikesCategoryCard;

