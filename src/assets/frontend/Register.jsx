import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import swal from "sweetalert";
import { Form } from "react-bootstrap";



const CreateAccount = (props) => {

      const navigate = useNavigate();
      const [registerInput, setRegister] = useState({
            name:'',
            email:'',
            password:'',
            error_list:[],
      });

     const handleChange =(e)=> {
           e.persist();
           setRegister({...registerInput, [e.target.name]: e.target.value});
     }

     const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
            name:registerInput.name,
            email: registerInput.email,
            password:registerInput.password,
     }

     axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`/api/register`, data).then((res) => {
          if(res.data.status === 200){
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_name', res.data.username);
            swal("Success", res.data.message, "success");
            navigate.push('/');
          }
          else{
            setRegister({...registerInput, error_list: res.data.validation_errors});
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
              <h4>Create Account</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="" name="name" onChange={handleChange} value={registerInput.name} id="name" className="from-control" />
                  <span>{registerInput.error_list.name}</span>
                  
                </div>
                <div className="form-group mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" onChange={handleChange} value={registerInput.email} id="email" className="form-control"  />
                  <span>{registerInput.error_list.email}</span>
                </div>
                
                <div className="form-group mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" onChange={handleChange} value={registerInput.password} id="password" className="from-control" />
                  <span>{registerInput.error_list.password}</span>
                </div>
              
                <div className="form-group mb-3">
                  <button type="submit" className="btn btn-primary" >Register</button>
                </div>
              </form>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;