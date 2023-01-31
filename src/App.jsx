import React, { useRef, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/about';
import Skills from './components/skills';
import Apps from './components/apps';
import Contact from './components/contact';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Teamwork from './components/teamwork';



// import { ThemeProvider } from 'styled-components';
// import { lightTheme, darkTheme, GlobalStyles } from './theme';
import { useContext } from 'react';
import { ThemeContext } from './contexts/themecontext';

import { Container, Button } from 'react-bootstrap';

import './App.css';

const App = () => {
  const { theme, themeToggler } = useContext(ThemeContext);
  const comparray = [<Home />, <About />, <Skills />, <Apps />, <Teamwork />, <Contact />];
  const navarray = ['home', 'about', 'skills', 'apps', 'teamwork', 'contact'];

  // const ref = useRef(null);
  // const executeScroll = () => ref.current.scrollIntoView();

  return (
    <div className={theme === 'light' ? 'light' : 'dark'}>
      <Container>
        <Button
          style={{
            margin: '1rem 0',
            padding: '10px',
            backgroundColor: 'gray',
            color: 'white',
          }}
          onClick={themeToggler}
        >
          light/dark
        </Button>

        {/* <Header /> */}

        <Header />

        {comparray.map((comp, index) => (
          <div key={index} id={navarray[index]}>
            {comp}
          </div>
        ))}
        <Footer />
      </Container>
    </div>
  );
};

export default App;

//   return (
//     <div className={theme === 'light' ? 'light' : 'dark'}>
//       <Container>
//         <Button
//           style={{
//             margin: '10px',
//             padding: '10px',
//             backgroundColor: 'gray',
//             color: 'white',
//           }}
//           onClick={themeToggler}
//         >
//           light/dark
//         </Button>
//         <Header />
//         <Home />
//         {/* <Home />
//         <About />
//         <Skills />
//         <Apps />
//         <Contact /> */}

//         <Footer />
//       </Container>
//     </div>
//   );
// };

// export default App;

//   return (
//     // <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
//     <>
//       {/* <GlobalStyles /> */}
//       <Container>
//         <Button
//           style={{
//             margin: '10px',
//             padding: '10px',
//             backgroundColor: 'gray',
//             color: 'white',
//           }}
//           onClick={themeToggler}
//         >
//           light/dark
//         </Button>

//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/skills" element={<Skills />} />
//           <Route path="/apps" element={<Apps />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//         <Footer />
//       </Container>
//     </>
//     // </ThemeProvider>
//   );
// };

// export default App;

// import { ThemeProvider } from 'styled-components';
// import { lightTheme, darkTheme, GlobalStyles } from './theme';
// import { Container, Button } from 'semantic-ui-react';
// import Header from './components/header';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   const [theme, setTheme] = useState('light');

//   const themeToggler = () => {
//     theme === 'light' ? setTheme('dark') : setTheme('light');
//   };

//   useEffect(() => {
//     const localTheme = localStorage.getItem('theme');
//     localTheme && setTheme(localTheme);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   return (
//     <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
//       <>
//         <GlobalStyles />
//         <Container>
//           <Button onClick={themeToggler}>Change Theme</Button>
//           <Header />
//           <About />
//           <Skills />
//           <Projects />
//           <Contact />
//           <Footer />
//         </Container>
//       </>
//     </ThemeProvider>
//   );
// }

// export default App;
