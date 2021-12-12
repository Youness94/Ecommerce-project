import "./App.css";
import Header from "./components/Header";
import Carts from "./pages/Catrs";
import Products from "./pages/Products";
import { CartProvider } from "react-use-cart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import AdminPrivateRoute from "./routes/AdminPrivateRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Announcement from "./components/Announcement";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Categories from "./pages/Categories";
import NewsLatter from "./components/NewsLatter";
import MasterLayout from "./layouts/Admin/MasterLayout";
import ClientRoute from "./ClientRoute";

import axios from 'axios';


axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-type'] = 'application/jason';
axios.defaults.headers.post['Accept'] = 'application/jason';

function App() {
  return (
    <Router>
      <div className="App">
        <CartProvider>
          <Switch>

            {/* dashboard admin route */}
          <Route path="/admin" name="Admin" render={(props) => <MasterLayout {...props} /> } />
          {/* <AdminPrivateRoute path="/admin" name="Admin" /> */}

          {/* <ClientRoute path="/" name="Home" /> */}

          <Route path="/register">
            <Header />
              <Register />
            </Route>

            <Route path="/login">
            <Header />
              <Login />
            </Route>
          
            <Route path="/products" >
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
            <Header />
              <About/>
            </Route>
            <Route path="/contact">
            <Header />
              <Contact/>
            </Route>

            <Route path="/">
              <Announcement />
              <Header />
              <Home />
              <Categories />
              <NewsLatter />
            </Route>

          </Switch>
        </CartProvider>
      </div>
    </Router>
  );
}

export default App;
