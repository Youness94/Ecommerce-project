import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";

import {addCategory} from '../../Actions/CategoryAction.js'
import {useSelector, useDispatch} from "react-redux";


const Category = () => {

      

      const dispatch = useDispatch();
      const history = useHistory();
      const categories = useSelector(store=>store.categoryReducer.categories);

      
  
      const [categoryInput, setCategory] = useState({
        slug:'',
        name:'',
        description:'',
        error_list:[],
    });
    
    const handleChange =(e)=> {
       e.persist();
       setCategory({...categoryInput, [e.target.name]: e.target.value});
    }
  

  const handleCategory =  (e) => {
    e.preventDefault();
    const categoryData = {
      slug : categoryInput.slug,
      name : categoryInput.name,
      description : categoryInput.description, 
      
    };

          axios.post(`/api/store-category`, categoryData).then( res => {
            if(res.data.status === 200){
              swal("Success", res.data.message, "success");
              setCategory({...categoryInput,
                slug:'',
                name:'',
                description:'',
    
              })
              document.getElementById('CATEGORY_FORM').reset();
            }
            else if(res.data.status === 400){
              setCategory({...categoryInput, error_list :res.data.errors});
            }
          });
           


          
        };

    

    

  var display_errors = [];
  if (categoryInput.error_list) {
    display_errors = [
      categoryInput.error_list.slug,
      categoryInput.error_list.name,
      // categoryInput.error_list.meta_title,
     
      
    ];
  }

  return (
    <div className="container-fluid px-4">
      {display_errors.map((item) => {
        return (
          <p className="mb-1" key={item}>
            {item}
          </p>
        );
      })}
      <div className="card mt-4">
        <div className="card-header">
          <h1 className="mt-4">
            Add Category
            <Link
              to="/admin/view-category"
              className="btn btn-primary btn-sm float-end"
            >
              View Category
            </Link>
          </h1>
        </div>
      </div>

      <div className="card-body">
        <form onSubmit={handleCategory} id="CATEGORY_FORM">
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
                id="seo-tags-tab"
                data-bs-toggle="tab"
                data-bs-target="#seo-tags"
                type="button"
                role="tab"
                aria-controls="seo-tags"
                aria-selected="false"
              >
                SEO Tags
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
              <div className="form-group mb-3">
                <label>Slug</label>
                <input
                  id="slug"
                  type="text"
                  name="slug"
                  onChange={handleChange}
                  value={categoryInput.slug}
                  className="form-control"
                />
                <span>{categoryInput.error_list.slug}</span>
              </div>
              <div className="form-group mb-3">
                <label>Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={categoryInput.name}
                  className="form-control"
                />
                <span>{categoryInput.error_list.name}</span>
              </div>
              <div className="form-group mb-3">
                <label>Description</label>
                <textarea
                  id="description"
                  name="description"
                  onChange={handleChange}
                  value={categoryInput.description}
                  className="form-control"
                ></textarea>
              </div>
              {/* <div className="form-group mb-3">
                <label>Status</label>
                <input
                  type="checkbox"
                  name="status"
                  onChange={handleChange}
                  value={categoryInput.status}
                />{" "}
                Status 0=shown/1=hidden
              </div> */}
            </div>
            {/* <div className="tab-pane card-body border fade" id="seo-tags" role="tabpanel" aria-labelledby="seo-tags-tab">
                              <div className="form-group mb-3">
                                    <label >Meta Title</label>
                                    <input type="text" name="meta_title" onChange={handleChange} value={categoryInput.meta_title} className="form-control" />
                              </div>
                              <div className="form-group mb-3">
                                    <label >Meta keywords</label>
                                    <textarea  name="meta_keyword" onChange={handleChange} value={categoryInput.meta_keyword} className="form-control"></textarea>
                              </div>
                              <div className="form-group mb-3">
                                    <label >Meta Description</label>
                                    <textarea  name="meta_description" onChange={handleChange} value={categoryInput.meta_description} className="form-control"></textarea>
                              </div>
                  </div> */}
          </div>
          <div>
          <button type='submit' className="btn btn-primary px-4 float-end" >
            ADD Category
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Category;
