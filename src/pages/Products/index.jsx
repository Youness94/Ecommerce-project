import React, { useState, useEffect } from "react";
import Product from "../../components/Product";
import "./index.css";
import {Container} from 'react-bootstrap'
import laptop from '../../img/laptop.jpg'
import couch from '../../img/couch.jpg'
import shoes from '../../img/shoes.jpg'

const products = [
  { id: 1, title: "Shoes", description: "blabla bla bla ", price: 25, image: laptop},
  { id: 2, title: "Shoes", description: "blabla bla bla ", price: 25, image: couch},
  { id: 3, title: "Shoes", description: "blabla bla bla ", price: 25, image: shoes},
  { id: 5, title: "Shoes", description: "blabla bla bla ", price: 25, image: couch},
  { id: 6, title: "Shoes", description: "blabla bla bla ", price: 25, image: laptop},
  { id: 7, title: "Shoes", description: "blabla bla bla ", price: 25, image: shoes},
  { id: 8, title: "Shoes", description: "blabla bla bla ", price: 25, image: couch},
];

const Products = () => {
  return (
    <Container>
      <div className="product_category" style={{textAlign:"center"}}>
        <h2><span>All</span></h2></div>
    <div className="products">
      {products.map((item) => (
        <Product
          title={item.title}
          price={item.price}
          description={item.description}
          image={item.image}
          item={item}
          key = {item.id}
        />
      ))}
    </div>
    </Container>
  );
};

export default Products;
