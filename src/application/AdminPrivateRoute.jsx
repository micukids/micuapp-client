import React, { useEffect, useState } from 'react'
import { getAxiosInstance } from '../services/functions';
import swal from 'sweetalert';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

function AdminPrivateRoute({children, redirectPath= "/login"}) {

    const instance = getAxiosInstance();
     const navigate = useNavigate(); 
     const [userAuthenticated, setUserAuthenticated] = useState(false);
     const [loading, setLoading] = useState(true);
     
     useEffect(() => {
       instance.get(`/api/checkingAuthenticated`).then(res => {
         if(res.status === 200){
           setUserAuthenticated(true);
   
         }
         setLoading(false);
       });
       return () => {
         setUserAuthenticated(false);
       }
     }, []);
   
       instance.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
         if(err.response.status === 401){
           swal('Unauthorized', err.response.data.message, "warning" );
           navigate('/'); 
         }
         return Promise.reject(err);
       });
   
       instance.interceptors.response.use(function (response) {
         return response;
       }, function (error) {
            if (error.response.status ===403){
               swal("Prohibido", error.response.data.message,"warning");
               navigate("/403");
            } else if(error.response.status === 404){
               swal("Error 404", "Url / Página no encontrada","warning");
               navigate("/404");
            }
            return Promise.reject(error);
       }
       )
   
   
       if (loading){
         return <h1>Loading...</h1>
       }
       

    
    if( !userAuthenticated){
       return <Navigate to={redirectPath} replace />
    }

    return children ? children : <Outlet />;
}

export default AdminPrivateRoute