import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";

const AddProduct = () => {
  const backendUrl = process.env.ECOMMERCE_APP_BACKEND_URL;

  const dispatch = useDispatch();

  // stats -----------------
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  // function --------------
  const handleChange = (a) => {
    switch (a.target.id) {
      case "title":
        setTitle(a.target.value);
        break;
      case "price":
        setPrice(a.target.value);
        break;
      case "description":
        setDescription(a.target.value);
        break;
      case "image":
        setImage(a.target.file[0]);
        break;
      default:
        break;
    }
  };
  const handleClick = async (e) => {
      e.preventDefault();
      if (title && description && image && price) {
      let fd = new FormData();
        fd.append("image", image);
        fd.append("description", description);
        fd.append("title", title);
        fd.append("price", price);
        fd.append("category_id");

        await axios.post(`${backendUrl}/store-product`, fd).then((res) =>{

        });
        setDescription("");
        setTitle("");
        setImage("");
        setPrice("");
       
      };
  };

  return (
    <div className="container-fluid px-4">
      <div className="card mt-4">
        <div className="card-header">
          <h4>
            Add Product
            <Link
              to="/admin/view-product"
              className="btn btn-primary btn-sm float-end"
            >
              View Product
            </Link>
          </h4>
        </div>
        <div className="card-body">
          <div className="form-group mb-3">
            <label>Select Category</label>
            <select name="category_id" className="form-control">
              <option>Select Category</option>
            </select>
          </div>

          <div className="form-group mb-3">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={title}
              id="title"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-3">
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={price}
              id="price"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-3">
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={description}
              id="description"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-3">
            <label>Image</label>
            <input
              type="file"
              name="image"
              value={image}
              id="image"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <Button variant="contained" color="primary" onClick={handleClick}>
              ADD To Product
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
