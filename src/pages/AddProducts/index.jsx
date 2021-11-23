import React, { useState } from 'react';  
import { Container } from 'react-bootstrap'
import './index.css'
import AddProduct from '../../components/AddProduct'
import Product from '../../components/Product'
import {useSelector, useDispatch} from "react-redux";
import {addProduct, deleteProduct, getProduct, updateProduct} from '../../Actions/ProductAction'

const AddProducts = (props) => {

      const dispatch = useDispatch();
      const product = useSelector(store=>store.productReducer.products);
      
       // stats -----------------
       const [price, setPrice]=useState("")
       const [title, setTitle]=useState("")
       const [description, setDescription]=useState("")
       const [image, setImage]=useState("")
       const [open, setOpen]=useState(product.length>0) 
       const [selectedItem, setSelectedItem]=useState({})
       const [addBtn, setAddBtn]=useState({id:'add', label:'ADD'})

        // functions----------------

        const handelClick =(e)=>{
              switch(e.target.id){
                  case 'add':
                          if(price!="" && description!="" && title!="" && image!=""){
                                dispatch(addProduct({price:price, description:description, title:title, image:image,}));
                                    setPrice("");
                                    setDescription("");
                                    setTitle("");
                                    setImage("");
                                    setOpen(true) ;
                          }
                          break;
                  case 'update':
                        if(price!="" && description!="" && title!="" && image!=""){
                              dispatch(updateProduct({price:price, description:description, title:title, image:image,}));
                              setPrice("");
                              setDescription("");
                              setTitle("");
                              setImage("");
                              setOpen(true) ;
                        }
                        break;
              }
        }
 
        
        const handelChange= (a) =>{

            switch(a.target.id){
                  case "title":
                        setTitle(a.target.value)
                        break;
                  case "price":
                        setPrice(a.target.value)
                        break;
                   case "description":
                        setDescription(a.target.value)
                        break;
                  case "image":
                        setImage(a.target.value)
                        break;


            }
           
      }

      const handelDelete = (d) =>{
            // dispatch(deleteProduct({d.target.id}));
            
            // if (car.length<=1){
            //       setOpen(false)
            // }
      }

      const handleUpdate=(e)=>{
            const selecteditm=product.filter(item=>item.id===e.target.name)[0];
      
            setSelectedItem(selecteditm)
            setDescription(selecteditm.description);
            setTitle(selecteditm.title);
            setPrice(selecteditm.price);
            setImage(selecteditm.image);
            setAddBtn({id:'update', label:'Update'})
      
      
      }
      return (
            <Container>
            <div className="">
                  <div>
                  <AddProduct click={handelClick} handleChange={(a)=>handelChange(a)} title={title} description={description} image={image} id={addBtn.id} label={addBtn.label}/>
                  </div>
                  <div>
                        {product.map(item => <Product description={item.description} keys={item.id} image={item.image} title={item.title} price={item.price}/>)}
                  </div>
            </div>
            </Container>
      )
}

export default AddProducts
