import axios from 'axios'

const backendUrl = process.env.ECOMMERCE_APP_BACKEND_URL;

export const getAllCategories = async () =>{
      var mydata = [];
      await axios.get(`${backendUrl}/view-product`).then(res)
};

export const getCategory = async () =>{};

export const addCategory = async () =>{};

export const deleteCategory = async () =>{};

export const updateCategory = async () =>{};