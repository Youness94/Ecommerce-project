import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'

const ViewCategory = () => {
      const backendUrl = process.env.ECOMMERCE_APP_BACKEND_URL;

      const [loading, setLoading] = useState(true);
      const [categoryList, setCategoryList] = useState([]);

      useEffect(()=> {
            axios.get(`${backendUrl}/view-category`).then(res => {
                  if(res.status === 200)
                  {
                        setCategoryList(res.data.category)
                  }
                  setLoading(false);
            });
      }, []);

      const deleteCategory = (e, id) => {
            e.preventDefault();
            const thisClicked = e.currentTarget;

            thisClicked.innerText ="Deleting";
            axios.delete(`${backendUrl}/delete-category/${id}`).then(res => {
                  if(res.data.status === 200)
                  {
                        swal("Success", res.data.message, "success");
                        thisClicked.closest("tr").remove();
                  }
                  else if(res.data.status === 404){
                        swal("Success", res.data.message, "success");
                        thisClicked.innerText = "Delete";
                  }
            });


      }

      var viewcategory_HTMLTABLE = "";
      if(loading){
            return <h4>Loading Category...</h4>
      }
      else{
            viewcategory_HTMLTABLE= 
            categoryList.map((item) =>{
                  return( 
                        <tr key={item.id}>
                              <td>{item.id}</td>
                              <td>{item.name}</td>
                              <td>{item.slug}</td>
                              <td>{item.status}</td>
                              <td>
                                    <Link to={`edit-category/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                              </td>
                              <td>
                                    <button type="button" onClick={(e)=>deleteCategory(e, item.id)} className="btn btn-danger btn-sm">Delete</button>
                              </td>
                        </tr>
                  )
            });
      }

       return (
           <div className="container px-4">
                  <div className="card mt-4">
                  <div className="card-header">
                        <h4>Category List
                              <Link to="/admin/add-category" className="btn btn-primary btn-sm float-end">Add Category</Link>
                        </h4>
                  </div>
            </div>
            <div className="card-body">
                  <table className="table table-bordered table-striped"> 
                        <thead>
                              <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Slug</th>
                                    <th>Status</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                              </tr>
                        </thead>
                        <tbody>
                              {viewcategory_HTMLTABLE}
                        </tbody>
                  </table>
            </div>
           </div>
      )
}

export default ViewCategory
