import "./App.css";
import Header from "./components/Header";
import Carts from "./pages/Catrs";
import Products from "./pages/Products";
import { CartProvider } from "react-use-cart";
import { BrowserRouter as Router,  Routes,Route , Navigate} from "react-router-dom";


import AdminPrivateRoute from "./routes/AdminPrivateRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Announcement from "./components/Announcement";
import Register from "./assets/frontend/Register";
import Login from "./assets/frontend/Login";



import NewsLatter from "./components/NewsLatter";
import MasterLayout from "./layouts/Admin/MasterLayout";

import AddProduct from './components/AdminComponent/addProduct';
import Category from './components/AdminComponent/category';
import Dashboard from "./components/AdminComponent/dashboard";
import EditCategory from './components/AdminComponent/editCategory';
import EditProduct from './components/AdminComponent/editProduct';
import Profile from './components/AdminComponent/profile';
import ViewCategory from './components/AdminComponent/viewCategory';
import ViewProduct from './components/AdminComponent/viewProduct';

import axios from 'axios';

import AdminView from "./layouts/Admin/AdminView";

import './assets/admin/css/styles.css'
import './assets/admin/js/scripts.js'



axios.defaults.baseURL ='http://localhost:8000/'
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-type'] = 'application/jason';
axios.defaults.headers.post['Accept'] = 'application/jason';

function App() {
  return (
   
      <div className="App">
        
        <CartProvider>
         <Router>
              <Routes>

              {/* <Route path="/login">
                {localStorage.getItem('auth_token')? <Navigate to='/'/> : <Login/>}
              </Route>
              <Route path="/register">
                {localStorage.getItem('auth_token')? <Navigate to='/'/> : <Register/>}
              </Route> */}

              {/* <Route path="/admin" element={<MasterLayout />} >
                <Route path="/admin/dashbord" element={<Dashboard/>} /> */}

              {/* <Route path="/admin" element={<MasterLayout/>} >
                  <Route path='/admin/dashboard' element={<Dashboard/>}/>
                  <Route path='/admin/profile' element={<Profile/>} />
                  <Route path='/admin/add-category' element={<Category/>} />
                  <Route path='/admin/view-category' element={<ViewCategory/>} />
                  <Route path='/admin/edit-category/:id' element={<EditCategory/>} />
                  <Route path='/admin/add-product' element={<AddProduct/>} />
                  <Route path='/admin/view-product' element={<ViewProduct/>} />
                  <Route path='/admin/edit-product/:id' element={<EditProduct/>} />
              </Route> */}

              <Route path="/products" element={<Products/>} />
              <Route path="/checkout" element={<Carts/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route exact path="/" element={<Home/>}/>
              
              
             
              
              </Routes>
            </Router>
        </CartProvider>
       
      </div>
   
  );
}

export default App;


{/* <Header />
              <Register />
            </Route> */}
            {/* <Route path="/login">
            <Header />
              <Login />
            </Route> */}
          
            {/* <Route path="/products" >
              <Announcement />
              <Header />
              <Products />
            </Route>

            <Route path="/checkout">
              <Announcement />
              <Header />
              <Carts />
            </Route>

            <Route path="/about">
            
              <About/>
            </Route>
            <Route path="/contact">
            <Header />
              <Contact/>
            </Route> */}

            
              {/* <Announcement />
              <Header />
              <Home />
              <Categories />
              <NewsLatter />
            </Route> */}
