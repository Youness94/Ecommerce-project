import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

const ViewProduct = () => {

      const [viewProduct, setProduct] = useState([]);
      const [loading, setLoading] = useState(true);

      useEffect(()=> {
            document.title ='View Products'
            axios.get(`/view-product`).then(res=>{
                  if(res.data.status===200){

                        setProduct(res.data.products)
                  }
            })
      }, []);
      
      var display_productData = "";
      if(loading){
            return <h4>View Products Loading...</h4>
      }
      else{
            display_productData= viewProduct.map( (item)=> {
                  return(
                        <tr key={item.id}>
                              <td>{item.id}</td>
                              <td>{item.category.name}</td>
                              <td>{item.title}</td>
                              <td>{item.price}</td>
                           <td><img src={`http:localhost:8000/${item.image}`} width="50px" alt="Image"/></td>
                              <td><Link to={`edit-product/${item.id}`} className="btn btn-success btn-sm">Edit</Link></td>
                              <td><button type="button" className="btn btn-danger btn-sm">Delete</button></td>

                        </tr>
                  )
            });
      }
      return (
            <div className="card px-4 mt-3">
                 <div className="card-header">
                       <h4>View Product
                             <Link to="/admin/add-product" className="btn btn-primary btn-sm float-end">Add Product</Link>
                       </h4>
                 </div>
                 <div className="card-body">
                       <div className="table-responsive">
                             <table className="table table-bordered table-striped">
                                   <thead>
                                         <tr>
                                               <th>ID</th>
                                               <th>Category Name</th>
                                               <th>Product Name</th>
                                               <th>Price</th>
                                               <th>Image</th>
                                               <th>Edit</th>
                                               <th>Delete</th>
                                         </tr>
                                   </thead>
                                   <tbody>
                                         {display_productData}
                                   </tbody>

                             </table>
                       </div>
                 </div>
            </div>
      )
}

export default ViewProduct;
