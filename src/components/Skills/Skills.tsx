import React, { useState } from 'react'
import { Skill } from '../../interfaces/ISkill';
import SkillsCard from '../SkillsCard/SkillsCard';
import './Skills.css'

export default function Skills(props: { skillsArray: Skill[]; }) {
    const skillsArray:Skill[] = props.skillsArray;

    return (
        <section id='Skills' className='skills'>
            <h1>My skills</h1>
            <div className="content-container">
                <div className="content-box">
                    <div className='grid'>
                        {
                            skillsArray.map((skill, i) => <SkillsCard key={i} skill={skill}></SkillsCard>)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
