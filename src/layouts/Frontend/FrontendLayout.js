import React from 'react'

import PublicRoutesList from '../../routes/PublicRoutesList.js'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import Announcement from '../../components/Announcement/index.jsx';
import Header from '../../components/Header/index.jsx';




const FrontendLayout = () => {
      return (
            <div >
                  <Announcement/>
                  <Header/>
                  

                        <div >
                             
                                    <Switch>
                                          {PublicRoutesList.map((routedata, idx)=>{
                                                return(
                                                      routedata.component && (
                                                            <Route
                                                            key={idx}
                                                            path={routedata.path}
                                                            exact={routedata.exact}
                                                            name={routedata.name}
                                                            render={(props) => (
                                                                  <routedata.component {...props} />
                                                            )}
                                                            />
                                                      )
                                                )
                                          })}
                                          
                                    </Switch>
                              
                             
                        </div>
                  </div>
         
      )
};

export default FrontendLayout;