import "./App.css";
import Header from "./components/Header";
import Carts from "./pages/Catrs";
import Products from "./pages/Products";
import { CartProvider } from "react-use-cart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

import Announcement from "./components/Announcement";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Categories from "./pages/Categories";
import NewsLatter from "./components/NewsLatter";
import MasterLayout from "./layouts/Admin/MasterLayout";

import axios from 'axios';
import AdminPrivateRoute from "./routes/AdminPrivateRoute";
import About from "./pages/About";
import Contact from "./pages/Contact";

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

            <Route path="/register">
            <Header />
              <Register />
            </Route>

            <Route path="/login">
            <Header />
              <Login />
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
