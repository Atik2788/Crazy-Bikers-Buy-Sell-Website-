import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {


    const { data: bikesCategories = [], refetch } = useQuery({
        queryKey: ["bikes"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/category")
            const data = await res.json();
            return data;
        }
    })
    // console.log(bikesCategories);



    return (
        <div className='mt-28'>
            <h2 className='text-center text-5xl font-bold text-red-600 mb-10'>Go With Your Craze..</h2>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                {
                    bikesCategories?.map(bikesCategory =>
                        <CategoryCard
                            key={bikesCategory.category_id}
                            bikesCategory={bikesCategory}
                        >
                        </CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Category;