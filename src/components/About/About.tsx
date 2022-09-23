import React from 'react'
import Link from 'react-scroll/modules/components/Link'
import './About.css'
export default function About() {
  const ME = require('../../assets/images/ME.jpg')
  const pdf = require('../../assets/pdf/resume.pdf')

  return (
    
    <section id="About">
      <label htmlFor="About"></label><h1>About Me</h1>
      <div className="flex-center">
        <div className="content-box">
          <div className="container-wrapper">
            <span className="side">
              <h2>Hi, my name is<br/>Victor Torres!</h2>
              <p> I am a third year student interested in software development and am studying Computer Science at the University of Florida. I enjoy creating visually appealing, responsive, front end applications using HTML, CSS and Typescript.</p> 
            </span>
            <span className="side">
              <img src={ME} ></img></span>
          </div>
        
          <ul className="bottom-container">
            <li><Link to="Experience" spy={true} smooth={true} offset={-50} duration={500}><h5>Experience</h5></Link></li>
            <li><Link to="Skills" spy={true} smooth={true} offset={-50} duration={500}><h5>Skills</h5></Link></li>
            <li><Link to="Projects" spy={true} smooth={true} offset={-50} duration={500}><h5>Projects</h5></Link></li>
            <li><Link to="Contact" spy={true} smooth={true} offset={-50} duration={500}><h5>Contact</h5></Link></li>
            <li><a href={pdf} target='_blank' rel='noopener noreferrer'><h5>Resume</h5></a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
