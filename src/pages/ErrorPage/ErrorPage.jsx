import React from "react";
import { Container } from "react-bootstrap";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <Container className="text-center">
      <h1>Oops!</h1>
      {error && (
        <img
          className="fluid"
          style={{ height: "400px", width: "650px" }}
          src="https://images.pexels.com/photos/1888015/pexels-photo-1888015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Error Image"
        />
      )}
      <p className="fs-4 text-danger mt-5">
        <>
          {"Error Message: "}
          {error.statusText || error.message}
        </>
      </p>
    </Container>
  );
};

export default ErrorPage;
