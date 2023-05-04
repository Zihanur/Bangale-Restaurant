import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const Recipes = ({ recipe }) => {
  const { recipe_name, ingredients, cooking_method, rating } = recipe;
  console.log(recipe);
  const [disabled, setDisabled] = useState(false);

  const handleDisabled = () => {
    setDisabled(true);
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 my-3">
      <Card className="h-100 position-relative">
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title className="fs-4">{recipe_name}</Card.Title>
          <div>
            <p>
              <span className="fw-bold">Ingredients:</span> {ingredients}
            </p>
            <p>
              <span className="fw-bold">Cooking Method:</span> {cooking_method}
            </p>
            <p>Rating: {rating}</p>
          </div>
          <Button
            onClick={handleDisabled}
            disabled={disabled}
            className="position-absolute bottom-0 end-0"
            variant="danger"
          >
            Add Favorite
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Recipes;
