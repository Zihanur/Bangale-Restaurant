import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <footer className='bg-dark text-white py-4'>
      <Container >
        <Row>
          <Col md={4} className="footer-col">
            <h5>About Us</h5>
            <p>Bangali Restaurant is establishments that serve food and drinks to customers, varying in size and style from small cafes to high-end fine dining, catering to a range of tastes and preferences.</p>
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
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </Col>
        </Row>
        <p className='text-center'><small>Copyright By @ Bangali Restaurant</small></p>
      </Container>
    </footer>
    </div>
  );
};

export default Footer;