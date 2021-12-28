import React from 'react';
import './index.css'
import FeauturedInfo from '../../../components/Dashboard/FeaturedInfo'
import Chart from '../../../components/Dashboard/Chart'
import {userData} from '../../../DummyData.js'
import WidgetSm from '../../../components/Dashboard/WidgetSm'
import WidgetLg from '../../../components/Dashboard/WidgetLg'

const Home = () => {
      return (
            <div className="home"> 
                  <FeauturedInfo/>
                  <Chart title="Users Analytics" data={userData} grid dataKey="Active User" />
                  <div className="home_widgets">
                        <WidgetSm/>
                        <WidgetLg/>
                  </div>
            </div>
      );
};

export default Home;