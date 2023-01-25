// This is skills component. It is used to display my skills.

import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const Skills = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Skills</h1>
        </Col>
      </Row>
      <Row
        style={{
          borderBottom: '5rem',
          paddingBottom: '3rem',
        }}
      >
        <Col
          sm={12}
          md={6}
          style={{
            paddingBottom: '2rem',
          }}
        >
          <h2 style={{ color: '#3c66c9' }}>Frontend</h2>
          <ProgressBar now={90} variant={'pbar'} label="HTML" />
          <ProgressBar now={90} variant={'pbar'} label="CSS" />
          <ProgressBar now={90} variant={'pbar'} label="JavaScript" />
          <ProgressBar now={90} variant={'pbar'} label="React" />
          <ProgressBar now={90} variant={'pbar'} label="Bootstrap" />
          <ProgressBar now={90} variant={'pbar'} label="ES6" />
          <ProgressBar now={90} variant={'pbar'} label="TypeScript" />
          <ProgressBar now={90} variant={'pbar'} label="Redux Tool Kit" />
          <ProgressBar now={90} variant={'pbar'} label="React Router" />
          <ProgressBar now={90} variant={'pbar'} label="React Hooks" />
          <ProgressBar now={90} variant={'pbar'} label="React Context" />
          <ProgressBar now={90} variant={'pbar'} label="React Redux" />
          <ProgressBar now={90} variant={'pbar'} label="React Bootstrap" />
        </Col>
        <Col
          sm={12}
          md={6}
          style={{
            paddingBottom: '2rem',
          }}
        >
          <h2 style={{ color: '#3c66c9' }}>Backend</h2>
          <ProgressBar now={90} variant={'pbar'} label="Node" />
          <ProgressBar now={90} variant={'pbar'} label="Express" />
          <ProgressBar now={90} variant={'pbar'} label="MongoDB" />
          <ProgressBar now={90} variant={'pbar'} label="MySQL" />
          <ProgressBar now={90} variant={'pbar'} label="PostgreSQL" />
          <ProgressBar now={90} variant={'pbar'} label="REST API" />
          <ProgressBar now={90} variant={'pbar'} label="JWT" />
          <ProgressBar now={90} variant={'pbar'} label="Heroku" />
          <ProgressBar now={90} variant={'pbar'} label="Netlify" />
          <ProgressBar now={90} variant={'pbar'} label="Git" />
          <ProgressBar now={90} variant={'pbar'} label="GitHub" />
          <ProgressBar now={90} variant={'pbar'} label="GitLab" />
          <ProgressBar now={90} variant={'pbar'} label="NPM" />
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;

{
  /* <Row>
        <Col sm={12} md={6}>
          <Card
          style={{backgroundColor: 'black',
        }}
          >
            <Card.Body
            style={{backgroundColor: 'brown',
            padding: '0px',
            height: '10rem',
          }}
            >
              <Card.Title
              style={{backgroundColor: 'yellow',
            }}
              >Frontend</Card.Title>
              <Card.Text
              
              >
              <ProgressBar now={90}  variant={'pbar'} label="HTML" 
              style={{backgroundColor: 'black'}}
              />
          <ProgressBar now={90}  variant={'pbar'} label="CSS" />
          <ProgressBar now={90}  variant={'pbar'} label="JavaScript" />
          <ProgressBar now={90}  variant={'pbar'} label="React" />
          <ProgressBar now={90}  variant={'pbar'} label="Bootstrap" />
          <ProgressBar now={90}  variant={'pbar'} label="ES6" />
          <ProgressBar now={90}  variant={'pbar'} label="TypeScript" />
          <ProgressBar now={90}  variant={'pbar'} label="Redux Tool Kit" />
          <ProgressBar now={90}  variant={'pbar'} label="React Router" />
          <ProgressBar now={90}  variant={'pbar'} label="React Hooks" />
          <ProgressBar now={90}  variant={'pbar'} label="React Context" />
          <ProgressBar now={90}  variant={'pbar'} label="React Redux" />
          <ProgressBar now={90}  variant={'pbar'} label="React Bootstrap" />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Backend</Card.Title>
              <Card.Text>
              <ProgressBar now={90}  variant={'pbar'} label="Node" />
          <ProgressBar now={90}  variant={'pbar'} label="Express" />
          <ProgressBar now={90}  variant={'pbar'} label="MongoDB" />
          <ProgressBar now={90}  variant={'pbar'} label="MySQL" />
          <ProgressBar now={90}  variant={'pbar'} label="PostgreSQL" />
          <ProgressBar now={90}  variant={'pbar'} label="REST API" />
          <ProgressBar now={90}  variant={'pbar'} label="JWT" />
          <ProgressBar now={90}  variant={'pbar'} label="Heroku" />
          <ProgressBar now={90}  variant={'pbar'} label="Netlify" />
          <ProgressBar now={90}  variant={'pbar'} label="Git" />
          <ProgressBar now={90}  variant={'pbar'} label="GitHub" />
          <ProgressBar now={90}  variant={'pbar'} label="GitLab" />
          <ProgressBar now={90}  variant={'pbar'} label="NPM" />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row> */
}
