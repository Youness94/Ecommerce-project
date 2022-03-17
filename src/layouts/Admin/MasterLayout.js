import React from 'react'

import '../../assets/admin/css/styles.css' 
import '../../assets/admin/js/scripts.js'

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

import routes from '../../routes/routes'
import { Route, Navigate, Routes, Outlet } from "react-router-dom";







const MasterLayout = () => {
      return (
            <div className="sb-nav-fixed">
                  <Navbar/>
                  <div id="layoutSidenav">
                        <div id="layoutSidenav_nav">
                              <Sidebar/>
                        </div>

                        <div id="layoutSidenav_content">
                              <main>
                                    
                                     
                              </main>
                              <Footer/>
                        </div>
                  </div>
            </div>
      )
};

export default MasterLayout;



                                    //  <main>
                                    // <Routes>
                                    //       {routes.filter(route => route.component)
                                    //       .map(({ name, exact, path, component: Component }, idx) => (
                                    //       <Route
                                    //             key={idx}
                                    //             path={path}
                                    //             name={name}
                                    //             exact={exact}
                                    //             element={<Component />}
                                    //       />
                                    //       ))}
                                    //       <Route
                                    //       path="/admin"
                                    //       element={<Navigate to="/admin/dashboard"/>}
                                    //       />
                                    //       {/* <Redirect from="/admin" to="/admin/dashboard" /> */}
                                    // </Routes> 
                                    // </main>