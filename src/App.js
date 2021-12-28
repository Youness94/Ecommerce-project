import "./App.css";
import Header from "./components/Header";
import Carts from "./pages/Catrs";
import Products from "./pages/Products";
import { CartProvider } from "react-use-cart";
import { BrowserRouter as Router, Switch, Route, Link , Redirect} from "react-router-dom";


import AdminPrivateRoute from "./routes/AdminPrivateRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Announcement from "./components/Announcement";
import Register from "./pages/Register";
import Login from "./pages/Login";

import SignIn from './components/SignIn'
import CreateAccount from './components/CreateAccount'

import NewsLatter from "./components/NewsLatter";
import MasterLayout from "./layouts/Admin/MasterLayout";



import axios from 'axios';


axios.defaults.baseURL ='http://localhost:8000/'
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-type'] = 'application/jason';
axios.defaults.headers.post['Accept'] = 'application/jason';

function App() {
  return (
   
      <div className="App">
         <Router>
        <CartProvider>
          <Switch>

          <Route path="/login">
            {localStorage.getItem('auth_token')? <Redirect to='/'/> : <SignIn/>}
          </Route>
          <Route path="/register">
            {localStorage.getItem('auth_token')? <Redirect to='/'/> : <CreateAccount/>}
          </Route>

           
           <Route path="/products" component={Products} />
           <Route path="/checkout" component={Carts} />
           <Route path="/about" component={About} />
           <Route path="/contact" component={Contact} />
           <Route exact path="/" component={Home}/>

           <Route path="/admin" name="Admin" render={(props) => <MasterLayout {...props} /> } />

          </Switch>
        </CartProvider>
        </Router>
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
