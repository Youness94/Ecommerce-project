import "./App.css";
import Header from "./components/Header";
import Carts from "./pages/Catrs";
import Products from "./pages/Products";
import { CartProvider } from "react-use-cart";
import { BrowserRouter as Router,  Route , Switch} from "react-router-dom";


import AdminPrivateRoute from "./routes/AdminPrivateRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Announcement from "./components/Announcement";
import Register from "./assets/frontend/Register";
import Login from "./assets/frontend/Login";



import NewsLatter from "./components/NewsLatter";
import MasterLayout from "./layouts/Admin/MasterLayout";



import axios from 'axios';



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
           <Switch>
           <Route path="/admin" name='Admin' render={(props) => <MasterLayout {...props} />} />

            <Route path="/about">
            
              <About/>
            </Route>

            <Route path="/contact">
              <Header />
              <Contact/>
            </Route> 
            
            <Route path="/checkout">
              <Announcement />
              <Header />
              <Carts />
            </Route>

            <Route path="/products" >
              <Announcement />
              <Header />
              <Products />
            </Route>

            <Route path="/">
              <Announcement />
              <Header />
              <Home />
              <NewsLatter />
            </Route>
           
           </Switch>
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

            
              {/*<Route path="/">
              <Announcement />
              <Header />
              <Home />
              <Categories />
              <NewsLatter />
            </Route> */}
