import React from 'react';
import "./index.css"
import {NotificationsNone,Language,Settings} from '@material-ui/icons';
import profile from '../../img/profile.png'


const Navbar = () => {
      return (
            <div className="navbar">
                  <div className="navbar_wrapper">
                        <div className="navbar_left">
                              <span className="logo">milali</span>
                        </div>
                        <div className="navbar_right">
                              <div className="navbar_icons">
                                    <NotificationsNone/>
                                    <span className="icon_badge">2</span>
                              </div>
                              <div className="navbar_icons">
                                    <Language/>
                                    <span className="icon_badge">2</span>
                              </div>
                              <div className="navbar_icons">
                                    <Settings/>
                              </div>
                              <img src={profile} alt="" className="navbar_img" />
                        </div>
                  </div>
            </div>
      );
};

export default Navbar;