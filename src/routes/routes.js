import Dashboard from "../components/AdminComponent/dashboard";
import Profile from "../components/AdminComponent/profile";
import Category from "../components/AdminComponent/category.jsx";
import ViewCategory from "../components/AdminComponent/viewCategory";
import EditCategory from "../components/AdminComponent/editCategory";
import AddProduct from '../components/AdminComponent/addProduct'
import ViewProduct from "../components/AdminComponent/viewProduct";
import EditProduct from "../components/AdminComponent/editProduct";


const routes = [
      {path: '/admin', exact: true, name:'Admin'},
      {path: '/admin/dashboard', exact: true, name:'Dashboard', component:Dashboard},
      {path: '/admin/add-category', exact: true, name:'Category', component:Category},
      {path: '/admin/view-category', exact: true, name:'ViewCategory', component:ViewCategory},
      {path: '/admin/edit-category/:id', exact: true, name:'EditCategory', component:EditCategory},
      {path: '/admin/profile', exact: true, name:'Profile', component:Profile},
      {path: '/admin/add-product', exact: true, name:'AddProduct', component:AddProduct},
      {path: '/admin/view-product', exact: true, name:'ViewProduct', component:ViewProduct},
      {path: '/admin/edit-product/:id', exact: true, name:'EditProduct', component:EditProduct},
];


export default routes;


