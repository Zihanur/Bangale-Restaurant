import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <Container className="d-flex justify-content-center">
        <Spinner animation="border" variant="danger" />;
      </Container>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;
