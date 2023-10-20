// a component to highlight my teamwork experience in the portfolio page by including the github username of the team members and the github link of the project. This would be a table with the team members and the project name. The user can click on the project name to see more details about the project.

import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import { useContext } from 'react';
import { ThemeContext } from '../contexts/themecontext';

const projlist = [
  {
    id: 1,
    title: 'Travel Blog',
    team: ['Jens, ', 'Bruno, ', 'me'],
    teamlink: [
      'https://github.com/JensMatthiaschk',
      'https://github.com/brunonline02',
      'https://github.com/absima',
    ],
    projlink: 'https://github.com/JensMatthiaschk/react-travel-blog',
    details: `
    This project was done to learn about using contentful
    data management system, fetching data from contentful on
    a website, extracting data from contentful and using it
    locally without the need of fetching it from contentful,
    and lastly using a database (ElephantSql in our case) to
    store data and fetch as a resource to the website.
    `,
  },
  {
    id: 2,
    title: 'Cook-book',
    team: ['Bruno, ', 'Julio, ', 'Samin, ', 'me'],
    teamlink: [
      'https://github.com/brunonline02',
      'https://github.com/jltzbrg',
      'https://github.com/Saminf90',
      'https://github.com/absima',
    ],
    projlink: 'https://github.com/brunonline02/cookbook',
    details: `
    In this short-time project, we were creating a website with a
                 list of some food recipes. After agreeing on the wireframe and
                 the design, we split the work into some sections and worked on
                 them individually. We were using github to share and merge our
                 work together. We were also using discord to communicate and
                 share our screens.`,
  },
  {
    id: 3,
    title: 'MyFlix',
    team: ['Sivak, ', 'Fi, ', 'Arthi, ', 'me'],
    teamlink: [
      'https://github.com/SivakHico',
      'https://github.com/Tuffisoft',
      'https://github.com/ArthiRagothaman',
      'https://github.com/absima',
    ],
    projlink: 'https://github.com/absima/groupWork_practicingReact',
    details: `
    This project was done to learn about using react,
                 react-bootstrap, and react-router. We chose to work on building
                 a website that helps users to plan their movie time. Users can
                 browse through the list of movies and Tv shows in our website
                 and add them to their favorite list and plan watching them on a
                 specific date. We were working on this project individually and
                 using github to share and merge our work together. We were also
                 using discord to communicate and share our screens.
    `,
  },
  {
    id: 4,
    title: 'PSD to HTML (1)',
    team: ['Marina, ', 'Fi, ', 'Jens, ', 'me'],
    teamlink: [
      'https://github.com/aquamarineru',
      'https://github.com/Tuffisoft',
      'https://github.com/JensMatthiaschk',
      'https://github.com/absima',
    ],
    projlink: 'https://github.com/aquamarineru/psd_to_html.git',
    details: `
    This project was done to create a website from an image file in
                 a PSD format. It was a great experience to learn how to use
                 photoshop and how to create a website from a PSD file. In
                 contrast to the travel blog project, each contributor was tasked
                 to work on a different section of the website. We were working
                 on our own and communicating through discord. We were also using
                 github to share and merge our work together. As it was a few
                 hours exercise, we were not able to finish it and the creator of
                 the repo had to commit the changes made by us to avoid github
                 issue workaround.
    `,
  },
  {
    id: 5,
    title: 'PSD to HTML (2)',
    team: ['Roxana, ', 'Dennis, ', 'Naser, ', 'Zan, ', 'me'],
    teamlink: [
      'https://github.com/roxibi',
      'https://github.com/doda1603',
      'https://github.com/naser0o0',
      'https://github.com/zanlyons',
      'https://github.com/absima',
    ],
    projlink: 'https://github.com/roxibi/company_profile_crossover',
    details: `
    Similar to PSD to HTML -I, this was another project to create a
                 website from an image file in a PSD format. We divided the work
                 into sections and each contributor was tasked to work on a
                 different section of the website. For example, a contributor was
                 mainly responsible for extracting the details from the PSD file
                 to create the HTML and CSS files. That may include pixel size,
                 image, color, font information, etc. It was another great
                 interraction with the team members.
    `,
  },
  {
    id: 6,
    title: 'Database',
    team: ['Marina, ', 'Fi, ', 'Roland, ', 'me'],
    teamlink: [
      'https://github.com/aquamarineru',
      'https://github.com/Tuffisoft',
      'https://github.com/rol423',
      'https://github.com/absima',
    ],
    projlink: 'https://github.com/aquamarineru/group7-database',
    details: `
    This project used mockapi.io database to create a website that loads the data in pages. It was another short time project to interract in a crossover team and learn about using a database. 
    
    `,
  },
];

const Teamwork = (props) => {
  // from themecontext
  const { theme } = useContext(ThemeContext);

  const length = projlist.length;
  const [open, setOpen] = useState([false, false, false, false, false, false]);

  const showDetails = (index) => {
    const newOpen = [...open];
    newOpen[index] = !newOpen[index];
    setOpen(newOpen);
  };

  return (
    <Container
      fluid
      style={{
        backgroundColor: theme === 'light' ? 'white' : '#1a1a1a',
        color: theme === 'light' ? 'black' : 'white',
        padding: '0',
      }}
    >
      <Row>
        <Col>
          <h1>Teamwork</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <div
            style={{
              backgroundColor: theme === 'light' ? 'white' : '#1a1a1a',
              color: theme === 'light' ? 'black' : 'white',
              padding: '0',
            }}
          ></div>
          <Table
            // striped
            bordered
            hover
            style={{
              backgroundColor: theme === 'light' ? 'white' : '#1a1a1a',
              color: theme === 'light' ? 'black' : 'white',
              padding: '0',
            }}
          >
            <thead>
              <tr>
                <th>Title</th>
                <th>Team</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {projlist.map((proj, index) => {
                return (
                  <tr key={proj.id}>
                    <td>
                      {proj.title}
                      {open[index] ? (
                        <MdKeyboardArrowUp
                          style={{
                            marginLeft: '10px',
                            cursor: 'pointer',
                          }}
                          onClick={() => {
                            showDetails(index);
                          }}
                        ></MdKeyboardArrowUp>
                      ) : (
                        <MdKeyboardArrowDown
                          style={{
                            marginLeft: '10px',
                            cursor: 'pointer',
                          }}
                          onClick={() => {
                            showDetails(index);
                          }}
                        ></MdKeyboardArrowDown>
                      )}
                      {open[index] ? (
                        <div>
                          <p>{proj.details}</p>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {proj.team.map((member, index) => {
                        return (
                          <a
                            href={proj.teamlink[index]}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                          >
                            {member}
                          </a>
                        );
                      })}
                    </td>
                    <td>
                      <a
                        href={proj.projlink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {/* <MdOpenInNew></MdOpenInNew> */}
                        <FaGithub></FaGithub>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Teamwork;
