import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faYoutube,
  faInstagram,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

// a footer component to display the logos of the social media platforms and links to the social media pages of the company and the developer of the website. Finally the footer also displays the year of the website creation.

const Footer = () => (
  <footer className="mt-5">
    <Container fluid={true}
    
    >
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          listStyle: 'none',
          fontSize: '1.5rem',
          backgroundColor: '#f4f4f4',

        }}
      >
        <li>
          {' '}
          <a
            href="https://www.linkedin.com/in/simachew/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/absima"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/absima"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@absima26"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/absima/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/absima"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
      </ul>
      <Row className="border-top justify-content-between p-3">
        <Col className="p-0" md={3} sm={12}>
          <a
            href="https://www.linkedin.com/in/simachew/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Simachew Mengiste
          </a>
        </Col>
        <Col className="p-0 d-flex justify-content-end" md={3}>
          {/* This year's date is automatically updated by the code below. */}
          {new Date().getFullYear()} &copy; Simachew
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
