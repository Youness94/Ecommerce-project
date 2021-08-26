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
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="home">E-commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="">
            <Nav.Link href="home">Home</Nav.Link>
            {/* <Nav.Link href="products">Products</Nav.Link> */}

            <NavDropdown
          id="nav-dropdown-dark-example"
          title="Shop"
          menuVariant="dark"
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>




            <Nav.Link href="checkout">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
