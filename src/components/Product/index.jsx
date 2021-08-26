import React from "react";
import { Card, Button } from "react-bootstrap";
import './index.css'
import { useCart } from 'react-use-cart'

const Product = (props) => {
      const {addItem} = useCart();
  return (
    <>
      <Card style={{ width: "23rem" }} className="product__card">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
         <div className="card_title_price_product">
         <Card.Title>{props.title}</Card.Title>
          <Card.Title>$ {props.price}</Card.Title> 
         </div>

          <Card.Text>{props.description}</Card.Text>
          <div className="button__card__product">
          <Button variant="primary" onClick={() => addItem(props.item)}>Add to Cart</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
