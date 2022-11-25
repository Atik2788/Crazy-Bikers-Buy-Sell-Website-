import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BikesCategory = () => {
    const bikes = useLoaderData()
    console.log(bikes);
    const {category, buyYear, postDate, cc, conditionType, 
        description, hp, img, location, mobileNumber, 
        name, originalPrice, resalePrice} = bikes;

    return (
        <div>
            Bikes 
        </div>
    );
};

export default BikesCategory;