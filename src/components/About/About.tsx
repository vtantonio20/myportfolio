import React from 'react'
import Link from 'react-scroll/modules/components/Link'
import './About.css'
export default function About() {
  const ME = require('../../assets/images/IMG_7278.jpg')
  const pdf = require('../../assets/pdf/resume.pdf')

  return (
    <>
    <section id="About">
      <label htmlFor="About"></label><h1>About Me</h1>
      <div className="flex-center">
        <div className="content-box">
          <div className="container-wrapper">
            <span className="side">
              <h2>Hi, my name is<br/>Victor Torres!</h2>
              <p>As a passionate software developer, I thrive on turning complex problems into elegant solutions. With a strong foundation in Java, Python, and modern web technologies, I enjoy every aspect of the development process, from brainstorming ideas to deploying robust applications. My experience spans creating intuitive user interfaces with React Native to building powerful backends with Flask and Java frameworks. I love learning new technologies and continuously improving my skills, whether it's mastering the latest JavaScript library or optimizing a database query. For me, software development isn't just a job—it's a craft that I am dedicated to honing every day.</p> 
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
 
  </>
  )
}
