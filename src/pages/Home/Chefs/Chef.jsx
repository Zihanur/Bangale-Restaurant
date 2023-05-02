import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const Chef = ({ chef }) => {
  console.log(chef);
  const { id, name, picture, experience, likes, recipes } = chef;
  return (
    <div className="col-12 col-md-6 col-lg-4 my-3">
      <Card>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title className="fs-3 fw-bold">{name}</Card.Title>
          <Card.Text className="my-0 mb-1 fs-5">Experience: {experience} Years</Card.Text>
          <Card.Text className="my-0 mb-1 fs-5">Total Recipes: {recipes}</Card.Text>
          <Card.Text className="my-0 mb-1 fs-5">Likes: {likes}</Card.Text>
          <Button className="mt-3 fs-5" variant="danger">View Recipes</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Chef;
