// contact component. It is used to display my contact information.

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Contact</h1>
        </Col>
      </Row>
      <Row className="controw">
        <Col sm={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Phone</Card.Title>
              <Card.Text>+49 (176) *** *****</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Gmail adress</Card.Title>
              <Card.Text>
                <a href="mailto:absimath@gmail.com"> absimath@gmail.com </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>City address</Card.Title>
              <Card.Text>
                60431 Frankfurt, Germany
                {/* <div>
                  <a href="https://goo.gl/maps/BJnGLUn5ZHLqoDKTA" target="_blank" rel="noopener noreferrer"> Google Maps </a>
                </div> */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
