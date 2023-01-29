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
    // if element is not null, scroll to it
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
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
        borderBottom: '0.2rem solid #6f0404',
        position: 'sticky',
        top: '0',
        zIndex: '1',

        // stick
      }}
    >
      <Navbar.Brand as={Link} to="/">
        <img
          src="/images/logo.png"
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
          <Nav.Link as={NavLink} onClick={scrollTo('about')}>
            About
          </Nav.Link>
          <Nav.Link as={NavLink} onClick={scrollTo('skills')}>
            Skills
          </Nav.Link>
          <Nav.Link as={NavLink} onClick={scrollTo('apps')}>
            Apps
          </Nav.Link>
          <Nav.Link as={NavLink} onClick={scrollTo('contact')}>
            Contact
          </Nav.Link>
        </Nav>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              <i className="fas fa-globe"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu
            // style={{
            //   display: 'flex',
            //   justifyContent: 'space-around',
            // }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
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
                <Dropdown.Item href="https://hub.docker.com/u/absima">
                  <i className="fab fa-docker"></i> Docker
                </Dropdown.Item>


                <Dropdown.Item href="https://discord.com/users/2F990615849637404702">
                  <i className="fab fa-discord"></i> Discord
                </Dropdown.Item>

  
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
