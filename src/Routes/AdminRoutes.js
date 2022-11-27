import React, { useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const AdminRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if(loading || isAdminLoading){
       return <progress className="progress full" value="100" max="100"></progress>
    }

    if (user && isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoutes;