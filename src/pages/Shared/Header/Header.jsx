import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="me-auto">
        <Navbar.Brand href="#home" className="fs-2">
          BANGALE RESTAURANT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav "
          className="justify-content-end "
        >
          <Nav className="">
            <Link to={"/"} className="text-white text-decoration-none fs-5">
              Home
            </Link>
            <Link
              to={"/blog"}
              className="text-white text-decoration-none fs-5 ms-3"
            >
              Blog
            </Link>
            <Link to={"/profile"}>
              <FaUserCircle
                style={{ fontSize: "3rem" }}
                className="text-white ms-3"
              ></FaUserCircle>
            </Link>
            <Link to={'/login'}><Button variant="outline-danger" className="fs-6 ms-3">
              Login
            </Button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
