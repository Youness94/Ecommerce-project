import React from "react";
import "./index.css";
import { Form } from "react-bootstrap";

const AddProduct = (props) => {
  return (
    <div className="add__product">
      <div className="add__forms div_title_form">
        <Form.Control type="title" placeholder="Title" id="title" value={props.title} />
      </div>
      <div className="add__forms div_price_form">
        <Form.Control type="number" placeholder="Price" id="price" value={props.price} />
      </div>
      <div className="add__forms div_category_form">
        <Form.Control type="text" placeholder="Category" id="caregory" value={props.category} />
      </div>
      <div className="add__forms div_description_form">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Description"
            id="description"
            value={props.description}
          />
        </Form.Group>
      </div>
      <div className="add__forms div_image_form">
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control type="file" id="image" value={props.image} />
        </Form.Group>
      </div>
    </div>
  );
};

export default AddProduct;
