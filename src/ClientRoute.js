import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import FrontendLayout from './layouts/Frontend/FrontendLayout'

const ClientRoute = ({...rest}) => {
      return (
           <Route {...rest} render={(props) => <FrontendLayout {...props}/>} />
      )
}

export default ClientRoute