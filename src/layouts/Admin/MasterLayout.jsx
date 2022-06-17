import React from 'react'



import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

import routes from '../../routes/routes'
import { Redirect,  Route , Switch } from "react-router-dom";

import Dashboard from '../../components/AdminComponent/dashboard'



const MasterLayout = () => {
      return (
            <div className=''>
                 
                  <Navbar/>
                  {/* <Sidebar/>
                  <Dashboard/> */}

                  <div >
                 
                        <div>
                        <Sidebar/>
                        </div>

                        <div>
                              <main>
                             
                              <Switch>
                              {routes.map((route, idx)=>{
                                    return(
                                          route.component && (
                                                <Route
                                                key={idx}
                                                path={route.path}
                                                exact={route.exact}
                                                name={route.name}
                                                render={(props)=>(
                                                      <route.component {...props} />
                                                )}
                                                />
                                          )
                                    )
                              })}
                              <Redirect from='admin' to='/admin/dashboard' />
                              </Switch>      
                              </main>
                              <Footer/>
                        </div>
                  </div>
            </div>
      )
};

export default MasterLayout;
 