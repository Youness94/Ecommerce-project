import React from "react";
import "./index.css";
import { LineStyle, Timeline, TrendingUp,Person,Storefront,AttachMoney,} from "@material-ui/icons";

import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_wrapper">
        <div className="sidebar_menu">
          <h3 className="sidebar_title">Dashboard</h3>
          <ul className="sidebar_list">
            <Link to="/addCategory">
            <li className="sidebar_list_items active">
              <LineStyle className="icons"/>
              Home
            </li>
            </Link>
            <li className="sidebar_list_items">
              <Timeline className="icons"/>
              Analytics
            </li>
            <li className="sidebar_list_items">
              <TrendingUp className="icons"/>
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar_menu">
          <h3 className="sidebar_title">Quick Menu</h3>
          <ul className="sidebar_list">
            <li className="sidebar_list_items active">
              <Person className="icons"/>
              Users
            </li>
            <li className="sidebar_list_items">
              <Storefront className="icons"/>
              Products
            </li>
            <li className="sidebar_list_items">
              <AttachMoney className="icons"/>
              Transactions
            </li>
            <li className="sidebar_list_items">
              <TrendingUp className="icons"/>
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebar_menu">
          <h3 className="sidebar_title">Notifications</h3>
          <ul className="sidebar_list">
            <li className="sidebar_list_items active">
              <LineStyle className="icons"/>
              Home
            </li>
            <li className="sidebar_list_items">
              <Timeline className="icons"/>
              Analytics
            </li>
            <li className="sidebar_list_items">
              <TrendingUp className="icons"/>
              Sales
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
