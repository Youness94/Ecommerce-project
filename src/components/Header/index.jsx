import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./index.css";
import { Link } from "react-router-dom";
import { Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useCart } from "react-use-cart";

const Header = () => {
  const { totalItems } = useCart();
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow sticky-top">
    <div class="container">
      <Link class="navbar-brand" to="/">Ecommerce</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/products">Collection</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact">Contact</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/login">Login</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/register">Register</Link>
          </li>
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
          <Nav className="">
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