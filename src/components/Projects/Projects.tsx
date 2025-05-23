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
            <h4>Mobile Application</h4>
            <label htmlFor="FITTRACKR"><h5>FitTrackr</h5></label>
            <ul id="FITTRACKR">
              <li>Technologies: Expo, React Native, Flask, SQL Alchemy</li>
              <li>Languages: Typescript, Python</li>
              <li>
                As part of my personal projects, I developed FitTrackr, a fitness tracker app built with React Native and Flask, designed to help users track their weight training progression. The app features seamless Google sign-in integration, ensuring a secure and user-friendly experience. FitTrackr leverages native iOS and Android libraries to deliver a smooth and familiar user experience. The core functionality of the app allows users to create workouts and set exercises associated with those workouts. It also includes a robust set of suggested workouts and a clean, descriptive muscle map visual, helping users understand the targeted muscle groups for each suggested workout. The idea for this app came to me when I found myself journaling each workout in the notes app on my phone. I realized there were probably applications available that could simplify this process, but when researching them, I found them to be too cumbersome or not appealing enough for my needs. With my software development skills, I decided to create my own solution.
              </li>
              <li className='flex-center'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/t63OnGeiizw?si=36K7DSWI21ZNcn98" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
              </li>

              <li style={{ listStyleType: 'none' }}>
                <a href="https://github.com/vtantonio20/FitTrackr" target='_blanks'>Source Code</a>
              </li>
            </ul>
          </div>

          <div className="section-container">
            <h4>Web Application</h4>
            <label htmlFor="Intervids"><h5>InterVids</h5></label>
            <ul id="Intervids">
              <li>Technologies: Angular, Tailwind, Firebase, Circle CI</li>
              <li>Languages: Typescript</li>
              <li>
              As part of my school project, I was involved in the development of Intervids, an interactive video platform that leverages modern web technologies to create engaging and dynamic video experiences. Built with a focus on user interaction, Intervids allows users to engage with video content in a more immersive way, blending traditional video playback with interactive elements. The platform is designed to be versatile, making it suitable for educational content, marketing campaigns, or entertainment purposes. The idea for Intervids originated from my interest in enhancing the way users interact with digital media. By integrating interactive features into video streams, I aimed to create a tool that not only captures attention but also enhances the overall user experience. With my development skills, I built a solution that brings a new dimension to video content, making it more engaging and informative.              </li>
              <li className='flex-center'>
                <img src={INTERVIDS}></img>
              </li>
              <li style={{ listStyleType: 'none' }}>
                <a href="https://github.com/vtantonio20/Intervids" target='_blanks'>Source Code</a>
              </li>
            </ul>
          </div>

          <div className="section-container">
            <h4>Game</h4>
            <label htmlFor="SpaceShooter"><h5>Space Shooter</h5></label>
            <ul id="SpaceShooter">
              <li>Technologies: PyGame</li>
              <li>Languages: Python</li>
              <li>
              In one of my first efforts to learn Python, I created a knockoff Space Shooter game using Pygame. This was purely a passion project, driven by my genuine interest in learning programming at the time. It was one of the first complete projects I made and demonstrates my enthusiasm for software development. I created everything in this game, from the images and music to, of course, the code! It was an enjoyable experience, as this project was completed before I even started college, and it opened my eyes to the world of coding.              </li>
              <li className='flex-center'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/0Sod0kUkAtE?si=M8iwP0A16VSNXFWO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
