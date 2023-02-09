import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faYoutube,
  faDocker,
  faFacebook,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

// a footer component to display the logos of the social media platforms and links to the social media pages of the company and the developer of the website. Finally the footer also displays the year of the website creation.

const Footer = () => (
  <footer className="mt-5">
    <Container 
    >
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          listStyle: 'none',
          fontSize: '1.5rem',
          backgroundColor: '#f4f4f4',
          border: '0.2rem solid #6f0404',
          width: '100%',
          // maxWidth: '25rem', 
        }}
      >
        <li>
          {' '}
          <a
            href="https://www.linkedin.com/in/simachew/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin}
            style={{
              color: '#0A66C2',
            }}
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/absima"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} 
            
            style={{
              color: 'black',
            }}
            />
          </a>
        </li>
        <li>
          <a
            href="https://hub.docker.com/u/absima"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDocker}
            style={{
              color: '#2496ED',
            }}
            />
          </a>
        </li>
        <li>
          <a
            href="https://discord.com/users/2F990615849637404702"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDiscord} 
            style={{color: '#7289DA'}}

            />
          </a>
        </li>
        
        {/* <li>
          <a
            href="https://www.youtube.com/@absima26"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} 
            style={{color: '#FF0000'}}
            />
          </a>
        </li> */}
        <li>
          <a
            href="https://twitter.com/absima"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} 
            style={{color: '#1DA1F2'}}
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/absima"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook}
            style = {{color: '#4267B2'}}
            />
          </a>
        </li>
      </ul>

      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          listStyle: 'none',
          fontSize: '1.0rem',
          padding: '0.0rem',
        }}
      >
        {/* <li>Simachew Mengiste</li> */}
        <li>&copy; {new Date().getFullYear()} Simachew</li>
      </ul>
    </Container>
  </footer>
);

export default Footer;

// <ul>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>

//         <li>
//           <Link to="/privacy">Privacy</Link>
//         </li>
//       </ul>

//       <ul>
//         <li>
//           <Link to="/terms">Terms</Link>
//         </li>
//         <li>
//           <Link to="/cookies">Cookies</Link>
//         </li>
//         <li>
//           <Link to="/disclaimer">Disclaimer</Link>
//         </li>
//       </ul>
//       <ul>
//         <li>
//           <Link to="/sitemap">Sitemap</Link>
//         </li>
//         <li>
//           <Link to="/faq">FAQ</Link>
//         </li>
//         <li>
//           <Link to="/help">Help</Link>
//         </li>
//       </ul>
//       <ul>
//         <li>
//           <Link to="/advertise">Advertise</Link>
//         </li>
//         <li>
//           <Link to="/careers">Careers</Link>
//         </li>
//         <li>
//           <Link to="/donate">Donate</Link>
//         </li>
//       </ul>
