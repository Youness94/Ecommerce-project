import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// const CategoryItem = () =>{
  export default class CategoryItems extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2> Categories </h2>
        <Slider {...settings}>
          <div>
            <h3 color='black'>1</h3>
          </div>
          <div>
            <h3 color='black'>2</h3>
          </div>
          <div>
            <h3 color='black'>3</h3>
          </div>
          <div>
            <h3 color='black'>4</h3>
          </div>
          <div>
            <h3 color='black'>5</h3>
          </div>
          <div>
            <h3 color='black'>6</h3>
          </div>
          <div>
            <h3 color='black'>7</h3>
          </div>
          <div>
            <h3 color='black'>8</h3>
          </div>
        </Slider>
      </div>
    );
  }
};

