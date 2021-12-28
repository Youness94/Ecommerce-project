import React from 'react';
import './index.css'


const WidgetLg = () => {
      const Button =({type})=>{
           return <button className={"widgetLg_button " + type}>{type}</button>
      }
      return (
            <div className="widgetLg">
                  <h3 className="widgtLg_title">Latest tranactions</h3>
                  <table className="widgetLg_table">
                        <tr className="widgetLg_tr">
                              <th className="widget_th">Customer</th>
                              <th className="widget_th">Date</th>
                              <th className="widget_th">Amount</th>
                              <th className="widget_th">Status</th>
                        </tr>
                        <tr className="widgetLg_tr">
                              <td className="widgetLg_user">
                                    <img src="" alt="" className="widgetLg_img" />
                                    <span className="widgetLg_user_name">jon susan</span>
                              </td>
                              <td className="widgetLg_user_date">2 Oct 2020</td>
                              <td className="widgetLg_user_amount">$21.56</td>
                              <td className="widgetLg_user_status"><Button type="Approved"/></td>
                        </tr>
                        <tr className="widgetLg_tr">
                              <td className="widgetLg_user">
                                    <img src="" alt="" className="widgetLg_img" />
                                    <span className="widgetLg_user_name">jon susan</span>
                              </td>
                              <td className="widgetLg_user_date">2 Oct 2020</td>
                              <td className="widgetLg_user_amount">$21.56</td>
                              <td className="widgetLg_user_status"><Button type="Declined"/></td>
                        </tr>
                        <tr className="widgetLg_tr">
                              <td className="widgetLg_user">
                                    <img src="" alt="" className="widgetLg_img" />
                                    <span className="widgetLg_user_name">jon susan</span>
                              </td>
                              <td className="widgetLg_user_date">2 Oct 2020</td>
                              <td className="widgetLg_user_amount">$21.56</td>
                              <td className="widgetLg_user_status"><Button type="Pending"/></td>
                        </tr>
                        <tr className="widgetLg_tr">
                              <td className="widgetLg_user">
                                    <img src="" alt="" className="widgetLg_img" />
                                    <span className="widgetLg_user_name">jon susan</span>
                              </td>
                              <td className="widgetLg_user_date">2 Oct 2020</td>
                              <td className="widgetLg_user_amount">$21.56</td>
                              <td className="widgetLg_user_status"><Button type="Approved"/></td>
                        </tr>
                  </table>
            </div>
      );
};

export default WidgetLg;