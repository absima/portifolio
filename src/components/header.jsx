// This is the header containing the navbar of my single-page app. When the user clicks on the links, the app scrolls to the corresponding section of the page. The navbar is also responsive and collapses into a hamburger menu on smaller screens.

import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';

const Header = () => {
  const [elmentid, setElementid] = useState(null);
  const [element, setElement] = useState(null);

  useEffect(() => {
    if (elmentid) {
      setElement(document.getElementById(elmentid));
    }
  }, [elmentid]);

  useEffect(() => {
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [element]);

  const scrollTo = (id) => {
    return () => {
      setElementid(id);
    };
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      // fixed="top"
      style={{
        borderBottom: '5px solid #6f0404',
      }}
    >
      <Navbar.Brand as={Link} to="/">
        <img
          src="/src/images/logo.png"
          style={{
            borderRadius: '50%',
            marginLeft: '0.5rem',
            border: '0.25rem solid #6f0404',
          }}
          alt="logo"
          width="30"
          height="30"
        />{' '}
        <span style={{ color: '#6f0404' }}>S</span>imachew{' '}
        <span style={{ color: '#6f0404' }}>M</span>engiste
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/about" onClick={scrollTo('about')}>
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/skills" onClick={scrollTo('skills')}>
            Skills
          </Nav.Link>
          <Nav.Link as={NavLink} to="/apps" onClick={scrollTo('apps')}>
            Apps
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" onClick={scrollTo('contact')}>
            Contact
          </Nav.Link>
        </Nav>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              <i className="fas fa-globe"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="https://www.linkedin.com/in/simachew/">
                <i className="fab fa-linkedin"></i> LinkedIn
              </Dropdown.Item>
              <Dropdown.Item
                href="
                https://github.com/absima
                "
              >
                <i className="fab fa-facebook"></i> GitHub
              </Dropdown.Item>
              <Dropdown.Item href="https://twitter.com/absima26">
                <i className="fab fa-twitter"></i> Twitter
              </Dropdown.Item>
              <Dropdown.Item href="https://www.youtube.com/@absima26">
                <i className="fab fa-youtube"></i> YouTube
              </Dropdown.Item>
              <Dropdown.Item href="https://www.facebook.com/absima">
                <i className="fab fa-facebook"></i> Facebook
              </Dropdown.Item>
              <Dropdown.Item href="https://www.instagram.com/absima26/">
                <i className="fab fa-instagram"></i> Instagram
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
