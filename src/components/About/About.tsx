import React from 'react'
import Link from 'react-scroll/modules/components/Link'
import './About.css'
export default function About() {
  const ME = require('../../assets/images/ME.jpg')
  return (
    <section id="About">
      <h1>About Me</h1>
      <div className="about-container">
        <div className="content-box">
          <div className="container-wrapper">
            <span className="left-container">
              <h2>Hi, my name is<br/>Victor Torres!</h2>
              <p> I am a third year student interested in software development and am studying Computer Science at the University of Florida. I enjoy creating visually appealing, responsive, front end applications using HTML, CSS and Typescript.</p> 
            </span>
            <span className="right-container"><img src={ME}></img></span>
          </div>
        
          <ul className="bottom-container">
            <li><Link to="Experience" spy={true} smooth={true} offset={-50} duration={500}><h5>Experience</h5></Link></li>
            <li><Link to="Skills" spy={true} smooth={true} offset={-50} duration={500}><h5>Skills</h5></Link></li>
            <li><Link to="Projects" spy={true} smooth={true} offset={-50} duration={500}><h5>Projects</h5></Link></li>
            <li><Link to="Contact" spy={true} smooth={true} offset={-50} duration={500}><h5>Contact</h5></Link></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
