import React from 'react'
import './Projects.css'
export default function Projects() {
  const INTERVIDS = require('../../assets/images/InterVids.jpg')
  return (
    <section id='Projects'>
        <h1>Projects</h1>
        <div className="content-container">
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
        </div>
    </section>
  )
}
