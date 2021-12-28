import React from 'react';
import './index.css'
import {ArrowDownward,ArrowUpward } from "@material-ui/icons";

const FeauturedInfo = () => {
      return (
            <div className="featured">
                  <div className="featurded_items">
                        <span className="featured_title">Revanue</span>
                        <div className="featured_container">
                              <span className="featured_money">$2.50</span>
                              <span className="featured_rate">-23.7 <ArrowDownward className="featured_icons negative"/></span>
                        </div>
                        <span className="featured_sub">Compared to last month</span>
                  </div>
                  <div className="featurded_items">
                        <span className="featured_title">Sales</span>
                        <div className="featured_container">
                              <span className="featured_money">$2.50</span>
                              <span className="featured_rate">-23.7 <ArrowDownward className="featured_icons negative"/></span>
                        </div>
                        <span className="featured_sub">Compared to last month</span>
                  </div>
                  <div className="featurded_items">
                        <span className="featured_title">Cost</span>
                        <div className="featured_container">
                              <span className="featured_money">$2.50</span>
                              <span className="featured_rate">-23.7 <ArrowUpward className="featured_icons"/></span>
                        </div>
                        <span className="featured_sub">Compared to last month</span>
                  </div>
                  
            </div>
      );
};

export default FeauturedInfo;