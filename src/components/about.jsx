// This is about component of my portifolio page

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import me from '../images/me.jpg';

const About = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>About Me</h1>
        </Col>
      </Row>
      <Row
        style={{
          marginBottom: '-2rem',
        }}
      >
        <Col sm={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title
                style={{
                  color: '#3c66c9',
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  marginTop: '1rem',
                }}
              >
                Simachew Mengiste
              </Card.Title>
              <Card.Text>
                <div
                  style={{
                    display: 'flex',
                    // justifyContent: 'center',
                    width: '90%',
                  }}
                >
                  <img src={me} alt=" " style={{ width: '100%' }} />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card>
            <Card.Body
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
              }}
            >
              <Card.Title
                style={{
                  color: '#3c66c9',
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  marginTop: '.5rem',
                }}
              >
                Briefly ...
              </Card.Title>
              <Card.Text>
                {/* <p> */}
                My name is Simachew Mengiste. I identify myself best as a data
                scientist. I am also a qualified mathematician (bachelor's and
                master's), neuroinformatician (phd), computer scientist(phd) and
                a junior full-stack web developer (certified).
                {/* </p> */}
                {/* <p> */}
              </Card.Text>
              <Card.Text>
                This portifolio currently showcases the main web development
                projects I have recently worked on. The apps were designed to be
                responsive to different screen sizes, from mobile to desktop. In
                the future, I plan to not restrict the portifolio to web-dev
                only, but also include other projects I have worked on in the
                area of data science. I am also planning to include a blog
                section to share my thoughts on various topics. Thanks for
                visiting my portifolio.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
