import React, { useState } from 'react'
import CreateAccount from '../../components/CreateAccount'
import axios from 'axios'
import {addUser} from '../../services/userService'


const Register = () => {

     

      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      const handleChange = (e) => {
            switch (e.target.id) {
                  case "name":
                    setName(e.target.value);
                    break;
                  case "email":
                    setEmail(e.target.value);
                    break;
                  case "password":
                    setPassword(e.target.value);
                    break;
                 
                }

      };

      const handleClick = async (e) => {}

      return (
            <div>
                  <CreateAccount click={handleClick} handleChange={(e)=> handleChange(e)} name={name} email={email} password={password}  />
            </div>
      )
}

export default Register
