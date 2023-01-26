// projects.jsx is a component that displays the projects that I have worked on including each App's name, description, and a link to the App's page. The App's page is a component that displays the App's name, description, and a link to the App's GitHub repository.

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useContext } from 'react';

import { ThemeContext } from '../contexts/themecontext';
const Apps = (props) => {
  const { theme, themeToggler } = useContext(ThemeContext);
  return (
    <Container
    // fluid
    >
      <Row>
        <Col>
          <h1>Selected Apps</h1>
        </Col>
      </Row>
      <Row
        className="appsrow 
      
      "
        style={{
          display: 'flex',
          // flexWrap: 'nowrap',
          justifyContent: 'space-around',
        }}
        // style={{
        //   display: 'flex', justifyContent: 'space-around', margin: '20px', padding: '20px', backgroundColor: 'white', color: 'black'
        // }}
      >
        <Col sm={12} md={6} lg={4}>
          <Card
           
          >
            <Card.Body>
              <Card.Title className="card-title">simazon</Card.Title>
              <Card.Text>
                Simazon is an e-commerce website, inspired by Amazon. It has a
                functional user authentication system, a shopping cart and a
                search filter system. Planned is to add a payment system and
                modify the profile page to allow users to update their
                information.
              </Card.Text>
              <a href="https://simazon.netlify.app">
                <Button variant="primary">Visit App</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col
          sm={12}
          md={6}
          lg={4}
          className={theme === 'light' ? 'light' : 'dark'}
        >
          <Card>
            <Card.Body>
              <Card.Title>pokéstuff</Card.Title>
              <Card.Text>
                Pokéstuff is a simple app to explore the Pokémon universe. A
                user can search for one or more Pokémon character by typing part
                of its id, name or kind. There is also a memory card game that a
                user can play by choosing one of the difficulty levels.
              </Card.Text>
              <a href="https://pokefightdss.netlify.app">
                <Button variant="primary">Visit App</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>spinner</Card.Title>
              <Card.Text>
                This is the first app that I have developed shortly after I
                started learning the basics of HTML, CSS, and JavaScript. It is
                written on a single HTML file without using a library such as
                React.js. It enables one to randomly choose an item from a group
                of items. Users can add, remove, and edit items.
              </Card.Text>
              <a href="https://spinner.netlify.app">
                <Button variant="primary">Visit App</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>contacts</Card.Title>
              <Card.Text>
                It is basically a tutorial of React Router v-6. As I have been
                using the earlier version, I decided to follow the tutorial to
                get the idea. I liked the result when all the pieces were put
                together. I created its own server to replace the "fake network"
                and I twiked the app a bit to communicate with the API. I also
                modified the search filter.
              </Card.Text>
              <a href="https://simacontacts.netlify.app">
                <Button variant="primary">Visit App</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>collabnet</Card.Title>
              <Card.Text>
                Collabnet is an app under development. Because I have worked on
                networks for a while and am passionate about graph theory, I
                decided to start creating a network of some sort and visualize
                it on a web app. I used the grouping data of our 16 coursemates
                in 7 group projects to create a network of collaboration and
                visualize it.
              </Card.Text>
              <a href="https://collab-net.netlify.app">
                <Button variant="primary">Visit App</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title bg="dark" text="light">
                portifolio
              </Card.Title>
              <Card.Text>
                This is the portifolio that you are currently visiting. It is a
                React app that I created to display my projects and contact
                information. I used React Bootstrap to style the app. I also
                used React Router to create the navigation bar and the links to
                the projects and contact pages.
              </Card.Text>
              <a href="https://simaport.netlify.app">
                <Button variant="primary">Visit App</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Apps;
