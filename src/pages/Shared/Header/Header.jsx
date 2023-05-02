import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="me-auto">
        <Navbar.Brand href="#home" className="fs-2">
          BANGALE RESTAURANT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav " className="justify-content-end ">
          <Nav className="">
            <Link to={"/home"} className="text-white text-decoration-none fs-5">
              Home
            </Link>
            <Link to={"/blog"} className="text-white text-decoration-none fs-5 ms-3">
              Blog
            </Link>
            <Link to={'/profile'} className="text-white text-decoration-none fs-5 ms-3">Profile</Link>
            <Button variant="outline-danger" className="fs-6 ms-3">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
