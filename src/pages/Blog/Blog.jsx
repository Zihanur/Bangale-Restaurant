import React from "react";
import { Accordion, Container } from "react-bootstrap";

const Blog = () => {
  return (
    <Container>
      <h3 className="text-center">Blog Page</h3>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Controlled VS Uncontrolled Components
          </Accordion.Header>
          <Accordion.Body>
            Controlled components manage their value using React state, while
            uncontrolled components rely on the browser's state. Controlled
            components update their state via setState, while uncontrolled
            components are updated by the browser and do not require setState.
            Controlled components handle events via React onChange events, while
            uncontrolled components use standard HTML events like
            onInput.Controlled components can easily validate their input by
            checking the state value, while uncontrolled components require
            custom validation logic to be written. Controlled components are
            easier to debug since all state updates are handled by React, while
            uncontrolled components can be harder to debug since their state is
            managed by the browser.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>React props</Accordion.Header>
          <Accordion.Body>
            React have a props library called PropTypes that allows you to props
            passed to your components. PropTypes helps to catch errors early in
            development by providing warnings when an invalid prop is passed in
            the component. PropTypes is an optional library and is not required
            for your React components to work. However, using PropTypes can help
            catch errors early and make your code more robust.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Node.js VS Express.js</Accordion.Header>
          <Accordion.Body>
            Node.js and Express.js are two JavaScript technologies. Node.js is a
            runtime environment that allows you to run JavaScript code outside
            of a browser. It provides a set of APIs for working with the file
            system, network, and other system-level functions. Express.js is a
            web application framework built on top of Node.js that provides a
            set of tools and conventions for building web applications. Node.js
            provides a core set of functionality, but you need to use
            third-party libraries to build a web application.Express.js provides
            a set of built-in middleware functions, such as logging, error
            handling, and authentication, that can be used to quickly build a
            web application.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Custom Hook</Accordion.Header>
          <Accordion.Body>
            There are many type of Custom Hook in React. Custom hooks are a
            feature in React that allow you to extract reusable logic from your
            components. A custom hook is simply a JavaScript function that
            starts with the prefix "use", and can call other React hooks. The custom hook returns an object containing the fetched data, loading state, and any error that occurred during the fetch. This makes it easy to reuse the fetch logic in multiple components. Example: useState, useEffect etc.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Blog;
