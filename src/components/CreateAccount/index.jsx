import React from "react";
import { Form } from "react-bootstrap";
import {Link} from 'react-router-dom'
import "./index.css";

const CreateAccount = (props) => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Register</h4>
            </div>
            <div className="card-body">
              <Form>
                <div className="form-group mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" name="name" onChange={props.handleChange} value={props.name} id="name" className="from-control"  />
                  {/* <span>{props.error_list.name}</span> */}
                </div>
                <div className="form-group mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" onChange={props.handleChange} value={props.email} id="email" className="form-control"  />
                  {/* <span>{props.error_list.email}</span> */}
                </div>
                <div className="form-group mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" onChange={props.handleChange} value={props.password} id="password" className="from-control"  />
                  {/* <span>{props.error_list.password}</span> */}
                </div>
                
                <div className="form-group mb-3">
                  <button type="submit" onClick={props.handleClick} className="btn btn-primary" >Register</button>
                </div>
              </Form>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
