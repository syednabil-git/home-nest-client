import React, { useContext } from 'react'

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContex';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <span className='loading loading-spinner'></span>;
    }

    if(!user){
         return <Navigate to="/registration" state={location?.pathname} />;
    
    }
    return children;
};

export default PrivateRouter