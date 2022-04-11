import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Category = () => {
  const dispatch = useDispatch();
 

  const [categoryInput, setCategory] = useState({
    slug: "",
    name: "",
    description: "",
    error_list: [],
  });

  const handleChange = (e) => {
    e.persist();
    setCategory({ ...categoryInput, [e.target.name]: e.target.value });
  };
  const handleCategory = (e) => {
    e.preventDefault();
    const categoryData = {
      slug: categoryInput.slug,
      name: categoryInput.name,
      description: categoryInput.description,
    };
    axios.post(`/api/store-category`, categoryData).then((res) => {
      if (res.data.status === 200) {
        swal("Success", res.data.message, "success");
        setCategory({ ...categoryInput, slug: "", name: "", description: "" });
        document.getElementById("CATEGORY_FORM").reset();
      } else if (res.data.status === 400) {
        setCategory({ ...categoryInput, error_list: res.data.errors });
      }
    });
  };
  return (
    <div className="container m-2">
      <section className="myform form-group">
        <div className="jumbotron">
          {/* ---------------------- */}
          <div className="card-header">
            <h1 className="mb-5 text-center">
              Add Category
              <Link
                to="/admin/view-category"
                className="btn btn-primary btn-sm float-end"
              >
                View Category
              </Link>
            </h1>
          </div>
          {/* ---------------------- */}
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
                  <div className="form-group col-md-10">
                    <label for="input">Slug</label>
                    <input
                      id="slug"
                      type="text"
                      name="slug"
                      className="form-control"
                      value={categoryInput.slug}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-md-10">
                    <label for="input">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="form-control"
                      value={categoryInput.name}
                      onChange={handleChange}
                    />
                  </div>
                  {/* <div className="form-group col-md-10">
                    <label for="input">Image</label>
                    <input
                      id="image"
                      type="file"
                      name="image"
                      className="form-control"
                      value={categoryInput.image}
                      onChange={handleChange}
                    />
                  </div> */}
                  <div className="form-group col-md-10">
                    <label for="input">Description</label>
                    <textarea
                      id="description"
                      type="text"
                      name="description"
                      className="form-control"
                      value={categoryInput.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div
                  className="tab-pane card-body border fade"
                  id="seo-tags"
                  role="tabpanel"
                  aria-labelledby="seo-tags-tab"
                >
                  <div className="form-group col-md-10">
                    <label for="input">Meta Title</label>
                    <input
                      id="meta_title"
                      type="text"
                      name="meta_title"
                      className="form-control"
                      value={categoryInput.meta_title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-md-10">
                    <label for="input">Meta keywords</label>
                    <input
                      id="meta_keyword"
                      type="text"
                      name="meta_keyword"
                      className="form-control"
                      value={categoryInput.meta_keyword}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-md-10">
                    <label for="input">Meta Description</label>
                    <textarea
                      id="meta_description"
                      type="text"
                      name="meta_description"
                      className="form-control"
                      value={categoryInput.meta_description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              
              </div>
              <button
                  
                  className="btn btn-primary px-6 float-end"
                  
                >
                  ADD Category
                </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
