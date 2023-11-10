import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const ProvetRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext);
   const location=useLocation()
      console.log(location);

 if(loading){
  return <div> Loding..</div>
 }
   if(user){
     return children; 
   }
    return <Navigate to="/login" state={{from: location}} replace> </Navigate>
};

export default ProvetRoute;
