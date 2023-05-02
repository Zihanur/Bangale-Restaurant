import React from "react";
import { Button, Container } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container className="my-5">
      <h3 className="text-center">Register Terms and Conditions</h3>
      <div className="m-5">
        <ul className="fs-5">
          <li>
            <a href="">Terms 1</a>
          </li>
          <li>
            <a href="">Terms 2</a>
          </li>
          <li>
            <a href="">Terms 3</a>
          </li>
          <li>
            <a href="">Terms 4</a>
          </li>
          <li>
            <a href="">Terms 5</a>
          </li>
          <li>
            <a href="">Terms 6</a>
          </li>
          <li>
            <a href="">Terms 7</a>
          </li>
        </ul>
      </div>
      <div className="text-center">
      <Link to={"/register"}>
        <Button variant="primary" type="submit" className="fs-5">
          <FaArrowLeft className="me-2"></FaArrowLeft>
          Register
        </Button>
      </Link>
      </div>
    </Container>
  );
};

export default Terms;
