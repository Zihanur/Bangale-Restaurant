import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <div className='row border border-4'>
        <div className='col-12 col-md-6'>
          <img className='img-fluid' src="https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="banner" />
        </div>
        <div className='col-12 col-md-6 d-flex justify-content-center align-items-center fs-2'>
          <h3 className=''>Join us for an unforgettable dining experience at <br/> <span className='fs-1 text-danger fw-bold'>BANGALI RESTAURANT</span></h3>
        </div>
      </div>
    </Container>
  );
};

export default Home;