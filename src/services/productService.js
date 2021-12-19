import axios from 'axios'

const backendUrl = process.env.ECOMMERCE_APP_BACKEND_URL;

export const getAllProducts = async () =>{
      var mydata = [];
      await axios.get(`${backendUrl}/view-product`).then(res)
};

export const getProduct = async () =>{};

export const addProduct = async () =>{};

export const deleteProduct = async () =>{};

export const updateProduct = async () =>{};