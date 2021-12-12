import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Category = () => {

      const backendUrl = process.env.REACT_APP_BACKEND_URL;

  // slug:'',
  // name:'',
  // description:'',
  // status:'',
  // meta_title:'',
  // meta_keyword:'',
  // meta_description:'',
  // error_list:[],

  const [slug, setSlug] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error_list, setError_list] = useState([]);

  const handleInput = (a) => {
    switch (a.target.id) {
      case "slug":
        setSlug(a.target.value);
        break;
      case "name":
            setName(a.target.value);
        break;
      case "description":
        setDescription(a.target.value);
        break;
    }
  };

  const handleCategory = async (e) => {
    e.preventDefault();
    if(slug && name && description){
          let cd = new FormData();
          cd.append("slug", slug);
          cd.append("name", name);
          cd.append("description", description);

          // const data ={ name:"testt", slug:"bla bla", description:"dhdgdgd"}

          await axios.post(`${backendUrl}/store-category`, cd).then((res) => {
            if (res.data.status === 200) {
                  
              swal("Success", res.data.message, "success");
             
                  setSlug("");
                  setName("");
                  setDescription("");
                  
            } else if (res.data.status === 400) {
            //   setError_list({ ...categoryInput, error_list: res.data.errors });
            }
          });
        };

    }

    

  var display_errors = [];
  if (error_list) {
    display_errors = [
      error_list.slug,
      error_list.name,
      // error_list.meta_title,
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
        <form>
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
                  onChange={handleInput}
                  value={slug}
                  className="form-control"
                />
                <span>{error_list.slug}</span>
              </div>
              <div className="form-group mb-3">
                <label>Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleInput}
                  value={name}
                  className="form-control"
                />
                <span>{error_list.name}</span>
              </div>
              <div className="form-group mb-3">
                <label>Description</label>
                <textarea
                  id="description"
                  name="description"
                  onChange={handleInput}
                  value={description}
                  className="form-control"
                ></textarea>
              </div>
              {/* <div className="form-group mb-3">
                <label>Status</label>
                <input
                  type="checkbox"
                  name="status"
                  onChange={handleInput}
                  value={categoryInput.status}
                />{" "}
                Status 0=shown/1=hidden
              </div> */}
            </div>
            {/* <div className="tab-pane card-body border fade" id="seo-tags" role="tabpanel" aria-labelledby="seo-tags-tab">
                              <div className="form-group mb-3">
                                    <label >Meta Title</label>
                                    <input type="text" name="meta_title" onChange={handleInput} value={categoryInput.meta_title} className="form-control" />
                              </div>
                              <div className="form-group mb-3">
                                    <label >Meta keywords</label>
                                    <textarea  name="meta_keyword" onChange={handleInput} value={categoryInput.meta_keyword} className="form-control"></textarea>
                              </div>
                              <div className="form-group mb-3">
                                    <label >Meta Description</label>
                                    <textarea  name="meta_description" onChange={handleInput} value={categoryInput.meta_description} className="form-control"></textarea>
                              </div>
                        </div> */}
          </div>
          <button className="btn btn-primary px-4 float-end" onClick={handleCategory}>
            ADD Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default Category;
