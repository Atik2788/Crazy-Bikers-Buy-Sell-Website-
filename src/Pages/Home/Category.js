import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const Category = () => {
    // const [bikes, setBikes] = useState([])
    // console.log(bikes)


    const url = "category.json"

    const {data: bikesCategories, refetch} = useQuery({
        queryKey: ["bikes"],
        queryFn: async() =>{
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    })
    console.log(bikesCategories);



    return (    
        <div>
            {
                bikesCategories?.map(bikesCategory => <div key={bikesCategory.category_id}>
                    <p>{bikesCategory.category}</p>
                </div>)
            }
        </div>
    );
};

export default Category;