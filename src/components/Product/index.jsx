import React from "react";
import { Card, Button } from "react-bootstrap";
import "./index.css";
import { useCart } from "react-use-cart";

const Product = (props) => {
  const { addItem } = useCart();
  return (
    <div className="card">
      <img src={props.image} alt="" className="card__img" />
      <div className="card__body">
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
        <h3 className="card__price">{props.price}</h3>
        <button className="card__btn" onClick={() => addItem(props.item)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;











{
  /* 
   <Card className="card">
      <Card.Img variant="top" src={props.image} className="card__img" />
      <Card.Body className="card__body">
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
        <h3 className="card__price">{props.price}</h3>
        <button className="card__btn" onClick={() => addItem(props.item)}>
          Add to Cart
        </button>
      </Card.Body>
    </Card>


  <Card  className="card">
        <Card.Img variant="top" src={props.image} className="card__img"/>
        <Card.Body>
         <div className="card__body">
         <Card.Title className="card__title">{props.title}</Card.Title>
          <Card.Title className="card__price">{props.price}</Card.Title> 
          <Card.Text className="card__description">{props.description}</Card.Text>
          <button className="card__btn" onClick={() => addItem(props.item)}>Add to Cart</button>
         </div>
        </Card.Body>
      </Card>
    
  */
}

{
  /*
  <div className="card">
      <img src={props.image} alt="" className="card__img" />
      <div className="card__body">
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
        <h3 className="card__price">{props.price}</h3>
        <button className="card__btn" onClick={() => addItem(props.item)}>Add to Cart</button>
      </div>
    </div>
*/
}
