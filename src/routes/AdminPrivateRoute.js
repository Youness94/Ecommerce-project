// import React, {setState, useEffect} from 'react'
// import axios from "axios";
// import swal from "sweetalert";
// import { Route, Navigate , useNavigate} from 'react-router-dom'
// import MasterLayout from '../layouts/Admin/MasterLayout'


// const AdminPrivateRoute = ({...rest}) => {

//       const navigate = useNavigate();
//       const [authenticated, setAuthenticated] = setState(false);
//       const [loading, setLoading] = setState(true);
//       useEffect(() => {
//             axios.get('/api/ckeckingAuthenticated').then(res =>{
//                   if(res.status === 200){
//                         setAuthenticated(true);
//                   }
//                   setLoading(false)
//             });  
//             return () => {
//                   setAuthenticated(false);
//             }
//       }, []);
//       axios.interceptors.response.use(undefined, function axiosRetryInterceptors(err){
//             if(err.respones.status === 401){
//                   swal("Unauthorized", err.respones.data.messamge, "Warrning");
//                   navigate.push('/');
//             }
//             return Promise.reject(err);
//       });

//       if(loading){
//             return <h1>Loading...</h1>     
//       }

//       return (
//            <Route {...rest}
//            render={({props, location}) =>
//            authenticated ?
//            (<MasterLayout {...props}/>):
//            (<Navigate to={{pathname: '/login', state: {from: location} }}/>)
//       }

//            />
//       )
// }

// export default AdminPrivateRoute
