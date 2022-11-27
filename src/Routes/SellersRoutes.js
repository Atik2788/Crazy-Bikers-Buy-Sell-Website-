import React, { useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useSeller from '../hooks/useSeller';

const SellersRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isSeller, setSellerLoading] = useSeller(user?.email);
    const location = useLocation();

    if(loading || setSellerLoading){
       return <progress className="progress full" value="100" max="100"></progress>
    }

    if (user && isSeller){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default SellersRoutes;