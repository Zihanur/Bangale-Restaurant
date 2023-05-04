import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const { id, name, picture, experience, likes, recipes } = chef;

  return (
    <div className="col-12 col-md-6 col-lg-4 my-3">
      <Card>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title className="fs-3 fw-bold">{name}</Card.Title>
          <Card.Text className="my-0 mb-1 fs-5">
            Experience: {experience} Years
          </Card.Text>
          <Card.Text className="my-0 mb-1 fs-5">
            Total Recipes: {recipes.length}
          </Card.Text>
          <Card.Text className="my-0 mb-1 fs-5">Likes: {likes}</Card.Text>
          <Link to={`/chef/${id}`}>
            <Button className="mt-3 fs-5" variant="danger">
              View Recipes
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Chef;
