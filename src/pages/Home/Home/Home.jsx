import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Chef from "../Chefs/Chef";

const Home = () => {
  const chefs = useLoaderData();

  return (
    <Container>
      {/* Banner */}
      <div className="row border border-4">
        <div className="col-12 col-md-6">
          <img
            className="img-fluid"
            src="https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="banner"
          />
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center fs-2">
          <h3 className="">
            Join us for an unforgettable dining experience at <br />{" "}
            <span className="fs-1 text-danger fw-bold">BANGALI RESTAURANT</span>
          </h3>
        </div>
      </div>

      {/* Chefs List */}
      <div>
        <h1 className="text-center mt-5">
          Our Special <span className="text-danger fw-bold">Chefs</span>
        </h1>
        <hr className="w-75 w-md-50 mx-auto border border-dark border-2 opacity-50"></hr>
        <div className="row gap-y-4 mb-3">
          {chefs.map((chef) => (
            <Chef key={chef.id} chef={chef}></Chef>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Home;
