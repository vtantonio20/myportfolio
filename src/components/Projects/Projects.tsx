import React from 'react'
import ProjectsCard from '../ProjectsCard/ProjectsCard'
import './Projects.css'
export default function Projects() {
  const INTERVIDS = require('../../assets/images/InterVids.jpg')
  return (
    <section id='Projects'>
        <h1>Projects</h1>
        <div className="flex-center">
          <div className="content-box">
            <div className="section-container">
              <div className="left-padding">
                <label htmlFor="FITTRACKR"><h5>FitTrackr</h5></label>
                  <ul id="FITTRACKR">
                      <li>Fitness app to track gym gains.</li>
                      <iframe width="420" height="315"
                      src="https://youtu.be/t63OnGeiizw">
                      </iframe> 
                      <iframe
        width="560"
        height="315"
        src="https://youtu.be/t63OnGeiizw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
                      <li><a href="https://youtu.be/t63OnGeiizw" target='__blank__'>link </a></li>
                  </ul>  
                </div>            
            </div>
          </div>

          {/*
            <div className={"content-box" + ' ' + 'projects'}>
              <article>
                <header>
                  InterVids
                  <a href="https://github.com/vtantonio20/InterVids" target='_blank' rel='noopener noreferrer'>(LINK)</a>
                </header>
                <div className="project-body">
                  <img  src={INTERVIDS}></img>
                </div>
                <footer>
                  <p>For my software engineering class, I helped to create a web platform focusing on classroom interactions. This platform was video focused, allowing teachers to upload lecture videos, and students to watch those lecture videos. A major feature I implemented for this application was the chat system.</p>
                  <ul>
                    <li>Angular</li>
                    <li>Firebase</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </footer>
              </article>

            </div>
            */}
        </div>
    </section>
  )
}
