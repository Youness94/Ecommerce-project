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
      title:'',
      price:'',
      description:'',
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
      formData.append('title', productInput.title);
      formData.append('price', productInput.price);
      formData.append('description', productInput.description);

      axios.post(`/api/store-product`, formData).then( res => {
        if(res.data.status === 200){

          swal("Success",res.data.message,"success");
          setProduct({...productInput,
            category_id:'',
            title:'',
            price:'',
            description:'',

          })
          setError([]);
          
        }
        else if(res.data.status === 422){
          swal("All Fields are mandetory","","error");
          setError(res.data.errors);
        }
      });
       


      
    };
  return (
    <div className="container m-2">
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
          <form onSubmit={handleProduct}>
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
                      a
                </div>
                <div
                        className="tab-pane card-body border fade "
                        id="seotags"
                        role="tabpanel"
                        aria-labelledby="seotags-tab"
                      >
                      b
                </div>
                <div
                        className="tab-pane card-body border fade"
                        id="otherdetails"
                        role="tabpanel"
                        aria-labelledby="otherdetails-tab"
                      >
                      c
                </div>


              </div>
          </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddProduct;





{/* <form onSubmit={handleProduct}>
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
                  {/* -- */}
                  // <div className="form-group mb-3">
                  //   <label>Title</label>
                  //   <input
                  //     type="text"
                  //     name="title"
                  //     value={productInput.title}
                  //     onChange={handleChange}
                      
                  //     id="title"
                  //     className="form-control"

                  //   />
                  //   <small className="text-danger">{errorlist.title}</small>
                  // </div>
                 
                  
                  
                  //   <div className="form-group mb-3">
                  //     <label>Price</label>
                  //     <input
                  //       type="number"
                  //       name="price"
                  //       value={productInput.price}
                  //       onChange={handleChange}
                        
                  //       id="price"
                  //       className="form-control"
                        
                  //     />
                  //     <small className="text-danger">{errorlist.price}</small>
                  //   </div>

                  //   <div className="form-group mb-3">
                  //     <label>Description</label>
                  //     <input
                  //       type="text"
                  //       name="description"
                  //       value={productInput.description}
                  //       onChange={handleChange}
                      
                  //       id="description"
                  //       className="form-control"
                        
                  //     />
                  //     <small className="text-danger">{errorlist.description}</small>
                  //   </div>

                    

                    // <div className="form-group mb-3">
                    //   <label>Image</label>
                    //   <input
                    //     type="file"
                    //     name="image"
                    //     onChange={handleImage}
                    //     id="image"
                    //     className="form-control"
                        
                    //   />
                    //   <small className="text-danger">{errorlist.image}</small>
                    // </div>
               

                
              
            // </form> */}


  
  

    

   

   

    
//     <div className="form-group mb-3">
//     </div> 
//     </form>
//   </div>
  
  
// </div>
// </div> */}