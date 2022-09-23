import React from 'react'
import Project from '../ProjectsCard/ProjectsCard'
import './ProjectsCard.css'
export default function ProjectsCard(props) {
  return (
    <article className="projects-card">
      <header>
        InterVids
        <a href="https://github.com/vtantonio20/InterVids" target='_blank' rel='noopener noreferrer'>(LINK)</a>
      </header>
      <img className="image" src={props.img}></img>

    </article>
  )
}
