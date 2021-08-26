import './App.css';
import Header from './components/Header';
import Carts from './pages/Catrs';
import Products from './pages/Products';
import {CartProvider} from 'react-use-cart' 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import AddProducts from './pages/AddProducts';



function App() {
  return (
    <Router>
    <div className="App">
    <CartProvider>
      <Switch>

      <Route path="/products">
        <Header/>
        <Products/>
      </Route>

      <Route path="/checkout">
        <Header/>
        <Carts/>
      </Route>
      
      <Route path="/addproducts" >
        <Header/>
       <AddProducts/>
      </Route>

      <Route path="/" >
        <Header/>
        <Home/>
      </Route>

     </Switch>
     </CartProvider>
     
    </div>
    </Router>
  );
}

export default App;
