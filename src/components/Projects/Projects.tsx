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
              <div style={{padding:'1rem'}}>
              <h4>Mobile Application</h4>
                <label htmlFor="FITTRACKR"><h5>FitTrackr</h5></label>
                  <ul id="FITTRACKR">
                      <li>
                        As part of my personal projects, I developed FitTrackr, a fitness tracker app built with React Native and Flask, designed to help users track their weight training progression. The app features seamless Google sign-in integration, ensuring a secure and user-friendly experience. FitTrackr leverages native iOS and Android libraries to deliver a smooth and familiar user experience. The core functionality of the app allows users to create workouts and set exercises associated with those workouts. It also includes a robust set of suggested workouts and a clean, descriptive muscle map visual, helping users understand the targeted muscle groups for each suggested workout. The idea for this app came to me when I found myself journaling each workout in the notes app on my phone. I realized there were probably applications available that could simplify this process, but when researching them, I found them to be too cumbersome or not appealing enough for my needs. With my software development skills, I decided to create my own solution.
                      </li>
                      
                      <li className='flex-center'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/t63OnGeiizw?si=36K7DSWI21ZNcn98" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                      </li>
                      <li style={{listStyleType:'none'}}>
                        <a href="https://github.com/vtantonio20/FitTrackr" target='_blanks'>Source Code</a>
                      </li>
                  </ul>  
                </div>            
            </div>
          </div>
        </div>
    </section>
  )
}
