import React from "react";
import { Form } from "react-bootstrap";
import './index.css'
import {Link} from 'react-router-dom'

const SignIn = (props) => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Login</h4>
            </div>
            <div className="card-body">
              <Form>
                
                <div className="form-group mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" onChange={props.handleChange} value={props.name} id="name" className="form-control"  />
                </div>
                <div className="form-group mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" onChange={props.handleChange} value={props.password} id="password" className="from-control" />
                </div>
              
                <div className="form-group mb-3">
                  <button type="submit" className="btn btn-primary" >Login</button>
                </div>
              </Form>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
