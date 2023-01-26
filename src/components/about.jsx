// This is about component of my portifolio page

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import me from '/images/me.jpg';

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
                  // marginBottom: '1rem',
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
              <Card.Text
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'start',
                  border: '1px solid #3c66c9',
                  padding: '1rem',
                  borderRadius: '5px',
                  borderStyle: 'dashed',
                  width: '90%',
                }}
              >
                <Row>
                  <Col>linkedin:</Col>
                  <Col sm={8}>
                    <a
                      href="https://www.linkedin.com/in/simachew/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/simachew
                    </a>
                  </Col>
                </Row>

                <Row>
                  <Col>github:</Col>
                  <Col sm={8}>
                    <a
                      href="
                      https://github.com/absima"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/absima
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col>email:</Col>
                  <Col sm={8}>
                    <a href="mailto:simachew.mengiste@gmail.com">
                      absimath@gmail.com
                    </a>
                  </Col>
                </Row>
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
                  // marginBottom: '1rem',
                  // marginTop: '.6rem',
                }}
              >
                Briefly ...
              </Card.Title>
              <Card.Text>
                {/* <p> */}
                My name is Simachew Abebe Mengiste. I identify myself best as a data
                scientist. I am also a qualified mathematician (bachelor's and
                master's), neuroinformatician (phd), computer scientist(phd) and
                a junior full-stack web developer (certified).
                {/* </p> */}
                {/* <p> */}
              </Card.Text>
              <Card.Text>
                This portifolio currently showcases the main web development
                projects I have recently worked on. The apps were designed to be
                responsive to different screen sizes, from mobile to desktop. As
                for the programming language used in the apps, no other than
                JavaScript was used.
              </Card.Text>
              <Card.Text>
                In the future, I plan to not restrict the portifolio to web-dev
                only, but also include my existing Python-based data science projects. 
              </Card.Text>
              <Card.Text>Thanks for visiting my portifolio.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
