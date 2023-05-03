import React from "react";
import { Accordion, Container } from "react-bootstrap";

const Blog = () => {
  return (
    <Container>
      <h3 className="text-center">Blog Page</h3>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Controlled VS Uncontrolled Components</Accordion.Header>
          <Accordion.Body>
          Controlled components manage their value using React state, while uncontrolled components rely on the browser's state.  Controlled components update their state via setState, while uncontrolled components are updated by the browser and do not require setState. Controlled components handle events via React onChange events, while uncontrolled components use standard HTML events like onInput.Controlled components can easily validate their input by checking the state value, while uncontrolled components require custom validation logic to be written. Controlled components are easier to debug since all state updates are handled by React, while uncontrolled components can be harder to debug since their state is managed by the browser.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Blog;
