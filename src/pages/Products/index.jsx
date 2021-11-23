import React, { useState, useEffect } from "react";
import Product from "../../components/Product";
import "./index.css";
import {Container} from 'react-bootstrap'
import {useSelector, useDispatch} from "react-redux";
import imageA from '../../img/imageA.jpg'
import imageB from '../../img/imageB.jpg'
import imageC from '../../img/imageC.jpg'
import imageD from '../../img/imageD.jpg'
import imageE from '../../img/imageE.jpg'
import imageF from '../../img/imageF.jpg'
import imageG from '../../img/imageG.jpg'
import imageH from '../../img/imageH.jpg'
import imageI from '../../img/imageI.jpg'


const product = [
  { id: 1, title: "Shoes", description: "blabla bla bla ", price: 25, image: imageA},
  { id: 2, title: "Shoes", description: "blabla bla bla ", price: 25, image: imageB},
  { id: 3, title: "Shoes", description: "blabla bla bla ", price: 25, image: imageC},
  { id: 4, title: "Shoes", description: "blabla bla bla ", price: 25, image: imageD},
  { id: 5, title: "Shoes", description: "blabla bla bla ", price: 25, image: imageE},
  { id: 6, title: "Shoes", description: "blabla bla bla ", price: 25, image: imageF},
  { id: 7, title: "Shoes", description: "blabla bla bla ", price: 25, image: imageG},
  { id: 8, title: "Shoes", description: "blabla bla bla ", price: 25, image: imageH},
  { id: 9, title: "Shoes", description: "blabla bla bla ", price: 25, image: imageI},
];

const Products = () => {
  // const product = useSelector(store=>store.productReducer.products);

  return (
    <Container>
      {/* <div className="product_category" style={{textAlign:"center"}}>
        <h2><span>All</span></h2>
      </div> */}
    <div className="wrapper">
      {product.map((item) => (
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
