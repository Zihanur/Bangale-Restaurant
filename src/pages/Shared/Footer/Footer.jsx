import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white py-4">
        <Container>
          <Row>
            <Col md={4} className="footer-col">
              <h5>About Us</h5>
              <p>
                Bangali Restaurant is establishments that serve food and drinks
                to customers, varying in size and style from small cafes to
                high-end fine dining, catering to a range of tastes and
                preferences.
              </p>
            </Col>
            <Col md={4} className="footer-col">
              <h5>Contact Us</h5>
              <ul>
                <li>1234 Main Road</li>
                <li>Dhanmondi, Dhaka 1234</li>
                <li>Phone: (880) 1400-100001</li>
                <li>Email: info@bnrestautant.com</li>
              </ul>
            </Col>
            <Col md={4} className="footer-col">
              <h5>Follow Us</h5>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <FaFacebookSquare className="text-white fs-4"></FaFacebookSquare>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitterSquare className="text-white fs-4"></FaTwitterSquare>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagramSquare className="text-white fs-4"></FaInstagramSquare>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedin className="text-white fs-4"></FaLinkedin>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <p className="text-center">
            <small>Copyright By @ Bangali Restaurant</small>
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
