import React, { useState } from 'react'
import { Skill } from '../../interfaces/ISkill';
import SkillsCard from '../SkillsCard/SkillsCard';
import './Skills.css'


interface SkillsSectionProps {
  skillsArray: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skillsArray }) => {
  // Step 1: Group skills by type
  const groupedSkills = skillsArray.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.type]) {
      acc[skill.type] = [];
    }
    acc[skill.type].push(skill);
    return acc;
  }, {});

  // Step 2: Render each group with a heading
  return (
    <section id='Skills' className='skills'>
      <h1>My Skills</h1>
      <div className="flex-center">
        <div className="content-box">
          {
            Object.entries(groupedSkills).map(([type, skills]) => (
              <div key={type} className="skill-group">
                <h4 className="skill-type">{type}</h4>
                <div className="grid">
                  {skills.map((skill, i) => (
                    <SkillsCard key={`${type}-${i}`} skill={skill} />
                  ))}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
