import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Logout Successfuly");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="me-auto">
        <Navbar.Brand href="#home" className="fs-2 text-danger fw-bold">
          BANGALE RESTAURANT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav "
          className="justify-content-end "
        >
          <Nav className="">
            <Link
              to={"/"}
              className="text-white text-decoration-none fs-5 ms-3"
            >
              Home
            </Link>
            <Link
              to={"/blog"}
              className="text-white text-decoration-none fs-5 ms-3"
            >
              Blog
            </Link>
            {user ? (
              <>
                <Link to={"/profile"}>
                  <FaUserCircle
                    style={{ fontSize: "2.8rem" }}
                    className="text-white ms-3"
                  ></FaUserCircle>
                </Link>
                <Button
                  onClick={handleLogOut}
                  variant="outline-danger"
                  className="fs-6 ms-3"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Link to={"/login"}>
                <Button variant="outline-danger" className="fs-6 ms-3">
                  Login
                </Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
