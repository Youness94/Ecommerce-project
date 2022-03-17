import React, { useState } from "react";
import { Form } from "react-bootstrap";



import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import swal from "sweetalert";

const SignIn = (props) => {

  const navigate = useNavigate();
  
  const [signInput, setSign] = useState({
    email:'',
    password:'',
     error_list:[],
});

const handleChange =(e)=> {
   e.persist();
   setSign({...signInput, [e.target.name]: e.target.value});
}

const handleSubmit = (e) => {
  e.preventDefault();
  const data = {
    email: signInput.email,
    password: signInput.password,
  };

  axios.get('/sanctum/csrf-cookie').then(response =>{
  axios.post(`/api/login`, data).then((res) => {
     if(res.data.status === 200){
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_name', res.data.username);
            swal("Success", res.data.message, "success");
            navigate.push('/');
          }
          else if(res.data.status === 401){
            swal("Warning", res.data.message, "warning");
          }
          else{
            setSign({...signInput, error_list: res.data.validation_errors});
          }

});
});
}
  
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Login</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                
                <div className="form-group mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" onChange={handleChange} value={signInput.email} id="email" className="form-control"  />
                </div>
                <div className="form-group mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" onChange={handleChange} value={signInput.password} id="password" className="from-control" />
                </div>
              
                <div className="form-group mb-3">
                  <button type="submit" className="btn btn-primary" >Login</button>
                </div>
              </form>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
