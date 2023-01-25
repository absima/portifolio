// this is the home page component to welcome visitors to the portifolio. It contains a welcome message with a background image.

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <Container
      style={{
        backgroundColor: '#3c66c9',
        color: 'white',
        textAlign: 'center',
        paddingTop: '5rem',
        paddingBottom: '5rem',
        // marginTop: '20px',
      }}
    >
      <Row>
        <Col>
          <h1>Welcome to my portifolio</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>... merely about my web development experience and projects.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
