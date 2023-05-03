import React, { useEffect, useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Recipes from "../Recipes/Recipes";

const ChefRecipes = () => {
  const chef = useLoaderData();
  //console.log(chef);
  const { id, name, picture, experience, likes, recipes, bio } = chef;
  return (
    <Container>
      {/* Banner */}
      <div className="row border border-4">
        <div className="col-12 col-md-6">
          <img className="img-fluid" src={picture} alt="banner" />
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center fs-2">
          <div className="fs-5">
            <span className="fs-1 text-danger fw-bold">{name}</span>
            <br />
            <p>{bio}</p>
            <p>Experience: {experience} Years</p>
            <p>Recipes: {recipes.length}</p>
            <p>Likes: {likes}</p>
          </div>
        </div>
      </div>
      <div className="row gap-y-4 mb-3">
      <h1 className="text-center mt-5">
          {name} <span className="text-danger fw-bold">Recipes</span>
        </h1>
        <hr className="w-75 w-md-50 mx-auto border border-dark border-2 opacity-50"></hr>
        {recipes.slice(0,3).map((recipe) => (
          <Recipes key={recipe._id} recipe={recipe}></Recipes>
        ))}
      </div>
    </Container>
  );
};

export default ChefRecipes;
