import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";

const AddProduct = () => {
      const dispatch = useDispatch();
     
      
  

  
    const [categorylist, setCategorylist] = useState([]);
    const [productInput, setProduct] = useState({
      category_id:'',
      slug:'',
      name:'',
      description:'',
      meta_title:'',
      meta_keywordt:'',
      meta_description:'',
      quantity:'',
      brand:'',
      selling_price:'',
      original_price:'',
      featured:'',
      popular:'',
      status:"",
  });

const [imageInput, setImage] =useState([]);
const [errorlist, setError] =useState([]);

useEffect(()=> {
  axios.get(`/api/all-category`).then(res => {
        if(res.data.status === 200)
        {
         setCategorylist(res.data.category);
        }
        
  });
}, []);

const handleChange =(e)=> {
   e.persist();
   setProduct({...productInput, [e.target.name]: e.target.value});
}
const handleImage =(e)=> {
 
  setImage({image : e.target.files[0]});
}


const handleProduct = (e) => {
      e.preventDefault();
      const formData = new FormData();
      
      formData.append('image', imageInput.image);
      formData.append('category_id', productInput.category_id);
      formData.append('slug', productInput.slug);
      formData.append('name', productInput.name);
      formData.append('description', productInput.description);
      formData.append('meta_title', productInput.meta_title);
      formData.append('meta_keywordt', productInput.meta_keywordt);
      formData.append('meta_description', productInput.meta_description);
      formData.append('quantity', productInput.quantity);
      formData.append('brand', productInput.brand);
      formData.append('selling_price', productInput.selling_price);
      formData.append('original_price', productInput.original_price);
      formData.append('featured', productInput.featured);
      formData.append('popular', productInput.popular);
      formData.append('status', productInput.status);

      axios.post(`/api/store-product`, formData).then( res => {
        if(res.data.status === 200){

          swal("Success",res.data.message,"success");
          setProduct({...productInput,
            category_id:'',
            slug:'',
            name:'',
            description:'',
            meta_title:'',
            meta_keywordt:'',
            meta_description:'',
            quantity:'',
            brand:'',
            selling_price:'',
            original_price:'',
            featured:'',
            popular:'',
            status:"",
          });
          setError([]);
          
        }
        else if(res.data.status === 422){
          swal("All Fields are mandatory","","error");
          setError(res.data.errors);
        }
      });
       


   
    };
  return (
    <div className="container m-2 wrapper">
      <section className="myform form-group">
        <div className="jumbotron">
        <div className="card-header">
            <h4 className="mb-5 text-center">
              Add Products
              <Link
                to="/admin/view-category"
                className="btn btn-primary btn-sm float-end"
              >
                View Products
              </Link>
            </h4>
          </div>
              
          
          {/* ---------------------- */}
          <div className="card-body">
          <form onSubmit={handleProduct} encType="multipart/form-data" >
          <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
                  <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  >
                    Home
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                     className="nav-link"
                     id="seotags-tab"
                     data-bs-toggle="tab"
                     data-bs-target="#seotags"
                     type="button"
                     role="tab"
                     aria-controls="seo-tags"
                     aria-selected="false"
                  >
                    SEO Tags
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                     className="nav-link"
                     id="otherdetails-tab"
                     data-bs-toggle="tab"
                     data-bs-target="#otherdetails"
                     type="button"
                     role="tab"
                     aria-controls="other-details"
                     aria-selected="false"
                  >
                    Other Details
                  </button>
                </li>
          </ul>
              <div className="tab-content" id="myTabContent">
                <div
                        className="tab-pane card-body border fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                      {/* ---- */}
                      <div className="row">
                        <div className="form-group col-md-4 mb-3">
                            <label>Select Category</label>
                            <select name="category_id" value={productInput.category_id} className="form-control" onChange={handleChange} >
                              <option>Select Category</option>
                              {
                                categorylist.map((item) => {
                                  return(
                                    <option value={item.id} key={item.id}>{item.name}</option>
                                  )
                                })
                              }
                              
                            </select>
                            <small className="text-danger">{errorlist.category_id}</small>
                        </div>
                      {/* --- */}

                        <div className="form-group col-md-4 mb-3">
                          <label>Slug</label>
                          <input
                            type="text"
                            name="slug"
                            value={productInput.slug}
                            onChange={handleChange}
                            id="slug"
                            className="form-control"

                          />
                          <small className="text-danger">{errorlist.title}</small>
                        </div>
                        {/* --- */}

                          <div className="form-group col-md-4 mb-3">
                            <label>Name</label>
                            <input
                              type="text"
                              name="name"
                              value={productInput.name}
                              onChange={handleChange}
                              
                              id="name"
                              className="form-control"
                              
                            />
                            <small className="text-danger">{errorlist.price}</small>
                          </div>
                          {/* --- */}

                          <div className="form-group col-md-12 mb-3">
                            <label>Image</label>
                            <input type="file" name="image"  onChange={handleImage} className="form-control"/>
                          </div>

                          {/* ---- */}
                         
                          <div className="form-group col-md-12">
                            {/* col-md-10 mb-3*/}
                              <label for="input">Description</label>
                              <textarea
                                id="description"
                                type="text"
                                name="description"
                                className="form-control"
                                value={productInput.description}
                                onChange={handleChange}
                              
                              ></textarea>
                          </div>
                        </div>
                            
                    </div>
                <div
                        className="tab-pane card-body border fade "
                        id="seotags"
                        role="tabpanel"
                        aria-labelledby="seotags-tab"
                      >
                      <div className="form-group col-md-10">
                      <label>Meta Title</label>
                          <input
                            type="text"
                            name="meta_title"
                            value={productInput.meta_title}
                            onChange={handleChange}
                            
                            id="title"
                            className="form-control"

                          />
                      </div>
                      <div className="form-group col-md-10">
                      <label>Meta Keyword</label>
                          <input
                            type="text"
                            name="meta_keywordt"
                            value={productInput.meta_keywordt}
                            onChange={handleChange}
                            
                            id="title"
                            className="form-control"

                          />
                      </div>
                      <div className="form-group col-md-10">
                      <label>Meta Description</label>
                      <textarea
                                id="meta_description"
                                type="text"
                                name="meta_description"
                                className="form-control"
                                value={productInput.meta_description}
                                onChange={handleChange}
                              
                              ></textarea>
                      </div>
                </div>
                <div
                        className="tab-pane card-body border fade"
                        id="otherdetails"
                        role="tabpanel"
                        aria-labelledby="otherdetails-tab"
                      >
                      <div className="row"> 
                          <div className="form-group col-md-6 mb-3">
                            <label>Selling Price</label>
                            <input type="number" name="selling_price" value={productInput.selling_price} onChange={handleChange} className="form-control"/>
                          </div>
                          <div className="form-group col-md-6 mb-3">
                            <label>Original Price</label>
                            <input type="number" name="original_price" value={productInput.original_price} onChange={handleChange} className="form-control"/>
                          </div>
                          <div className="form-group col-md-6 mb-3">
                            <label>Quantity</label>
                            <input type="text" name="quantity" value={productInput.quantity} onChange={handleChange} className="form-control"/>
                          </div>
                          <div className="form-group col-md-6 mb-3">
                            <label>Brand</label>
                            <input type="text" name="brand" value={productInput.brand} onChange={handleChange} className="form-control"/>
                          </div>
                          <div className="form-group col-md-4 mb-3">
                            <label>Featured (checked=shown)</label>
                            <input type="checkbox" name="featured" value={productInput.featured} onChange={handleChange} className="w-50 h-50"/>
                          </div>
                          <div className="form-group col-md-4 mb-3">
                            <label>Popular (checked=shown)</label>
                            <input type="checkbox" name="popular" value={productInput.popular} onChange={handleChange} className="w-50 h-50"/>
                          </div>
                          <div className="form-group col-md-4 mb-3">
                            <label>Status (checked=hidden)</label>
                            <input type="checkbox" name="status" value={productInput.status} onChange={handleChange} className="w-50 h-50"/>
                          </div>
                      </div> 
                </div>
              </div>
              <button
                  type="submit"
                  className="btn btn-primary px-4 mt-2 float-end"
                  
                >
                  ADD Product
                </button>
          </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddProduct;








  
  

    

   

   

    
