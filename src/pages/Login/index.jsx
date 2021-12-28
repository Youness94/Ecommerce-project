import React from "react";
import SignIn from "../../components/SignIn";
import "./index.css";
import {Link} from 'react-router-dom'
import Header from '../../components/Header'

const Login = () => {
  return (
    <div>
      <Header/>
      <div className="login">
      {/*  */}
      <div className="login__logo">
        {/* <Link to="/">
          <span>E-commerce</span>
        </Link> */}
      </div>

      <div className="login__component">
        
        <SignIn />
      </div>
    </div>
    </div>
  );
};

export default Login;
