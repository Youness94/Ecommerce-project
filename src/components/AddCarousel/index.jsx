import React from "react";
import './index.css'
import {Carousel,} from 'react-bootstrap'
import accessoire1 from '../../img/accessoire1.jpeg'
import accessoire2 from '../../img/accessoire2.jpeg'
import accessoire3 from '../../img/accessoire3.jpeg'
import 'bootstrap/dist/css/bootstrap.css';


const AddCarousel = (props) => {
  return (
    <div className = "carousel__div">
      <Carousel className="carousel">
      <Carousel.Item>
          <img
             className="d-block w-100"
            src={accessoire1}
            alt=""
            className="carousel__images"
          />
          <Carousel.Caption>
            <p></p>
            <h1 style={{color:"black"}}>Best Selers</h1>
          <div className="liks__div">
          <a href="/products" className="carousel__links">Shop Now</a>
          </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
             className="d-block w-100"
            src={accessoire2}
            alt=""
            className="carousel__images"
          />
          <Carousel.Caption>
          <p></p>
          <h1 style={{color:"black"}}>New Styles</h1>
          <div className="liks__div">
          <a href="/products" className="carousel__links">Shop Now</a>
          </div>
          </Carousel.Caption>
          
        </Carousel.Item>   
      </Carousel>
    </div>
  );
};

export default AddCarousel;
