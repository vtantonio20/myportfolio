import React from 'react';
import About from './components/About/About';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
function App() {
  const skillsArray = require('./static/skills.json');

  return (
    <div>
      <Navbar/>
      <div className="app-background">
        <About/>
        <Experience/>
        <Skills skillsArray={skillsArray.skills}/>
        <Projects/>
        <Footer/>
      </div>

    </div>

  );
}

export default App;
