// This is about component of my portifolio page

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import me from '/images/me.jpg';
import me from '/images/me.jpeg';


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
          // height: '55rem',
        }}
      >
        <Col sm={12} md={6}>
          <div>
            
          </div>
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
              {/* <Card.Text> */}
                <div
                  style={{
                    display: 'flex',
                    // justifyContent: 'center',
                    width: '18rem',
                    // height: '18rem',
                    // width: '18rem',

                  }}
                >
                  <img src={me} alt=" " style={{ width: '100%' }} />
                </div>
              {/* </Card.Text> */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'start',
                  border: '1px solid #3c66c9',
                  padding: '1rem',
                  borderRadius: '5px',
                  borderStyle: 'dashed',
                  width: '18rem',
                }}
              >
                <Row>
                  <Col xs="4">email:</Col>
                  <Col>
                    <a href="mailto:absimath@gmail.com">absimath@gmail.com</a>
                  </Col>
                </Row>

                <Row>
                  <Col xs="4">github:</Col>
                  <Col>
                    <a
                      href="
                      https://github.com/absima
                      "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/absima
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4">linkedin:</Col>
                  <Col>
                    <a
                      href="https://www.linkedin.com/in/simachew/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/ in/simachew
                    </a>
                  </Col>
                </Row>

                {/* <Row>
                <Col xs="auto"> linkedin:</Col>
                  <Col >
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
                  <Col xs="auto"
                  style={{
                    backgroundColor: '#3c66c9',
                  }}
                  >github:</Col>
                  <Col>
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
                  <Col xs="auto">email:</Col>
                  <Col >
                    <a href="mailto:simachew.mengiste@gmail.com">
                      absimath@gmail.com
                    </a>
                  </Col>
                </Row> */}
              </div>
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
                My name is Simachew Abebe Mengiste. I identify myself best as a
                data scientist. I am also a mathematician (bachelor's
                and master's), neuroinformatician (phd), computer scientist(phd)
                and a junior full-stack web developer (certificate).
                {/* </p> */}
                {/* <p> */}
              </Card.Text>
              <Card.Text>
                This portifolio currently showcases the main web app development
                projects I have recently worked on. The apps were designed to be
                responsive to different screen sizes, from mobile to desktop. As
                for the programming language used in the apps, no other than
                JavaScript was used.
              </Card.Text>
              <Card.Text>
                In the future, I plan to not restrict the portifolio to web-dev
                only, but also include talks, blogs, tutorials on data science (mostly in Python), mathematics, machine learning, neuroinformatics and programming. 
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
