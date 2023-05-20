import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from 'react-loader-spinner';



const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location);

    if(loading){
        return <div className="flex items-center justify-center h-64">
        <Loader type="Rings" color="#4c51bf" height={80} width={80} />
      </div>
    }


    if(user) {
        return children;
    }

    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivateRoute;