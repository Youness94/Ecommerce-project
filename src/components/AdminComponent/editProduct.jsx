import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
import Button from '@material-ui/core/Button';

const EditProduct = () => {
      return (
<div className="container-fluid px-4">
                 <div className="card mt-4">
                       <div className="card-header">
                             <h4>Edit Product
                             <Link to="/admin/view-product" className="btn btn-primary btn-sm float-end">View Product</Link>
                             </h4>
                       </div>
                       <div className="card-body">
                       <div className="form-group mb-3">
                                    <label >Select Category</label>
                                    <select name="category_id" className="form-control">
                                          <option >Select Category</option>
                                    </select>
                              </div>
                              <div className="form-group mb-3">
                                    <label >Title</label>
                                    <input type="text" name="title"  className="form-control" />
                              </div>
                              <div className="form-group mb-3">
                                    <label >Price</label>
                                    <input type="number" name="price"  className="form-control" />
                              </div>
                              <div className="form-group mb-3">
                                    <label >Description</label>
                                    <input type="text" name="description"  className="form-control" />
                              </div>
                              <div className="form-group mb-3">
                                    <label >Image</label>
                                    <input type="file" name="image"  className="form-control" />
                              </div>
                              <div className="form-group mb-3">
                              <Button variant="contained" color="primary">ADD To Product</Button>
                              </div>
                       </div>
                 </div>
            </div>
      )
}

export default EditProduct
