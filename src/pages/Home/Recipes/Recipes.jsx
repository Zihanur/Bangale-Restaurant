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
          <Card.Title>{recipe_name}</Card.Title>
          <div>
            <p>Ingredients: {ingredients}</p>
            <p>Cooking Method: {cooking_method}</p>
            <p>Rating: {rating}</p>
          </div>
          <Button
            onClick={handleDisabled}
            disabled={disabled}
            className="position-absolute bottom-0 end-0"
            variant="danger"
          >
            Favorite
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Recipes;
