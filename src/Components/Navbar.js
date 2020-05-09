import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavbarComponent = ({ children }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">e-Commerce</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          {" "}
          <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link>
          {" "}
          <Link to="/add-product">Add New Product</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/cart">Shopping Cart</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/cart">{children}</Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};
