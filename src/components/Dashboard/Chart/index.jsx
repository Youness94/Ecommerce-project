import React from 'react';
import './index.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = (props, grid) => {

    

      return (
            <div className="chart">
                  <h3 className="chart_title">{props.title}</h3>
                  <ResponsiveContainer width="100%" aspect={4/1}>
                  <LineChart data={props.data}>
                  <XAxis dataKey="name" stroke="#5550bd"/>
                  <Line type="monotone" dataKey={props.dataKey} stroke="#5550bd"></Line>
                  <Tooltip/>
                  {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
                  {/* <YAxis stroke="#5550bd"/> */}
                  </LineChart>
                  </ResponsiveContainer>
            </div>
      );
};

export default Chart;