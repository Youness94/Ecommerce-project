import React from 'react'
import './index.css'

const CategoryItems = (props) => {
      return (
            <div className="category__container">
                  <img src="" alt="" className="category__image"/>
                  <div className="info">
                        <h1>{props.title}</h1>
                        <button className="category__button">Shop Now</button>
                  </div>      
            </div>
      )
}

export default CategoryItems
