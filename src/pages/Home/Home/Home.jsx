import React from "react";
import { Button, Card, CardGroup, Carousel, Container } from "react-bootstrap";
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

      {/* Offer Recipes */}
      <div className="my-5">
        <h1 className="text-center mt-3">
          Our Special <span className="text-danger fw-bold">Offer</span>
        </h1>
        <hr className="w-75 w-md-50 mx-auto border border-dark border-2 opacity-50"></hr>
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              className="rounded-circle"
              src="https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <Card.Body>
              <Card.Title className="fs-2 text-center">Burger</Card.Title>
              <Card.Text className="fw-bold fs-1 text-center text-danger">
                40% Discount
              </Card.Text>
              <Card.Text>
                <Button className="mx-auto fs-5" variant="danger">
                  Take
                </Button>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <small>Next 3 day offer on</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              className="rounded-circle"
              src="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Card.Body>
              <Card.Title className="fs-2 text-center">Pizza</Card.Title>
              <Card.Text className="fw-bold fs-1 text-center text-danger">
                25% Discount
              </Card.Text>
              <Card.Text>
                <Button className="mx-auto fs-5" variant="danger">
                  Take
                </Button>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <small>Today offer</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              className="rounded-circle"
              src="https://images.pexels.com/photos/2764905/pexels-photo-2764905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Card.Body>
              <Card.Title className="fs-2 text-center">Noodles</Card.Title>
              <Card.Text className="fw-bold fs-1 text-center text-danger">
                30% Discount
              </Card.Text>
              <Card.Text>
                <Button className="mx-auto fs-5" variant="danger">
                  Take
                </Button>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <small>This Month offer on</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>

      {/* Our Recipes Gallery */}
      <div>
        <h1 className="text-center mt-3">
          Our Recipes <span className="text-danger fw-bold">Gallery</span>
        </h1>
        <hr className="w-75 w-md-50 mx-auto border border-dark border-2 opacity-50"></hr>
        <Carousel className="h-50">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="First slide"
              style={{ height: "650px", width: "90%" }}
            />
            <Carousel.Caption>
              <h3>Soup</h3>
              <p>Bangali Restaurant Soup</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Second slide"
              style={{ height: "650px", width: "90%" }}
            />

            <Carousel.Caption>
              <h3>Burger</h3>
              <p>Bangali Restaurant Burger</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/551997/pexels-photo-551997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Third slide"
              style={{ height: "650px", width: "90%" }}
            />

            <Carousel.Caption>
              <h3>Vegetable</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
};

export default Home;
