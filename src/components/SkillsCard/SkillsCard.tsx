import React, { useRef } from 'react'
import { Skill } from '../../interfaces/ISkill';
import './SkillsCard.css'
export default function SkillsCard(props) {
  const skill:Skill = props.skill;

  return (
    <article className='skill-card'>
      <header>
        <h3>{skill.name}</h3>
      </header>
      <div>
        <img src={skill.img}></img>
      </div>
      <footer>
        <h5>{skill.type}</h5>
      </footer>
    </article>
  )
}
