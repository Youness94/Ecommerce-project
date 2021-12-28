import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./index.css";
import { Link } from "react-router-dom";
import { Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useCart } from "react-use-cart";

const Header = () => {
  const { totalItems } = useCart();

  var AuthButtons = '';
  if(!localStorage.getItem('auth_token'))
  {
    AuthButtons =(
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
          </li>
      </ul>
    )
  }
  else{
    AuthButtons =(
      <li className="nav-item">
            <button type="button" className="nav-link btn btn-danger btn-sm text-white" to="">Logout</button>
      </li>
    )
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow sticky-top">
    <div className="container">
      <Link className="navbar-brand" to="/">Ecommerce</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">Collection</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
          </li>
          {/* {AuthButtons} */}
          
          {/* <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li> */}
        </ul>  
        <Nav.Link href="checkout">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
        </Nav.Link> 
      </div>
    </div>
  </nav>
  );
};

export default Header;


{/* <Navbar bg="light" variant="light"> 
        <Container>
          <Navbar.Brand href="home">E-commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav classNameName="">
            <Nav.Link href="home">Home</Nav.Link>
            {/* <Nav.Link href="products">Products</Nav.Link> 

            <NavDropdown
          id="nav-dropdown-dark-example"
          title="Shop"
          menuVariant="dark"
        >
          <NavDropdown.Item href="/products">Products</NavDropdown.Item>
          
          {/* <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>




            <Nav.Link href="checkout">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>*/}