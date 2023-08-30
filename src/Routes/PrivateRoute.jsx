import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider.jsx/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    // console.log(user);
    const location = useLocation();
    const path = location?.pathname;
    // console.log(path, location);

    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <span className="loading loading-infinity w-[60px] bg-gradient-to-r from-secondary to-primary"></span>
            </div>
        )
    }

    if (user) {
        return children;
    }


    return <Navigate to='/login' replace={true} state={{ form: path }} />
};

export default PrivateRoute;