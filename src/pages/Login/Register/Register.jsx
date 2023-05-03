import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";

const Register = () => {

  const {createUser,addNamePhotoUrl} = useContext(AuthContext);
  
  const handleCreateUser = event =>{
    //get value from form
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;
    //user created
    createUser(email, password)
    .then((result)=>{
      //updaateProfile
      addNamePhotoUrl(name,photo)
      .then(()=>{
        console.log('profile update')
      })
      .catch((error)=>{
        console.log(error)
      })
      console.log(result.user);
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <Container className="my-5">
      <h3 className="text-center">Please Register Here</h3>
      <div className="row">
        <Form onSubmit={handleCreateUser} className="fs-4 col-md-9 col-lg-6 mx-auto">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control type="text" name="photo" placeholder="Enter photo URL" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required/>
          </Form.Group>
          <Form.Group className="mb-3 fs-5" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label={<p>Accept our <Link to={'/terms'} className="text-danger">Terms and Conditions</Link></p>} />
          </Form.Group>
          <Button variant="danger" type="submit" className="fs-5">
            Register
          </Button>
          <div>
            <Form.Text className="text-secondary fs-5">
              You have an Account? <Link to="/login" className="text-danger">Login</Link>
            </Form.Text>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Register;
