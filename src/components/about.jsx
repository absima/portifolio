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
          <div></div>
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
                Greetings,
              </Card.Title>
              <Card.Text>
                I am Simachew Mengiste, primarily a data scientist. My academic journey has wandered
                through the captivating territories of mathematics, data analysis,
                computer science, and the multidisciplinary landscapes of
                computational neuroscience. 
              </Card.Text>
              <Card.Text>
                Recently, I delved into the realm of full-stack web development,
                a fascinating blend of creativity and technology. Within this
                portfolio, you'll find glimpses of my endeavors, a humble
                testament to my dedication. This venture has transformed into
                not just a pastime, but a genuine passion that invites me to
                explore the intricate interplay of front-end and back-end
                technologies during my leisure time. Contained within are
                projects that nicely adapt to various screens.
              </Card.Text>
              <Card.Text>
                But this portfolio's narrative is just a start. Its horizons will broaden, encompassing not only
                the craft of web development, but an array of other past, present and future pursuits in variouis topics. 
              </Card.Text>
              <Card.Text>
                Thanks for visiting.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
