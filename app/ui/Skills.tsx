import React from 'react'
import Button from './Button'
import { SkillType } from '../dataTypes/SkillType';


const Skills = () => {  
    const skills: SkillType[] = [
        { name: "HTML", iconClass: "fab fa-html5", hoverClass: "blue-300" },
        { name: "CSS", iconClass: "fab fa-css3-alt", hoverClass: "blue-300" },
        { name: "JavaScript", iconClass: "fab fa-js-square", hoverClass: "blue-300"},
        { name: "React", iconClass: "fab fa-react", hoverClass: "blue-300" },
        { name: "Node.js", iconClass: "fab fa-node-js", hoverClass: "blue-300" },
        { name: "Python", iconClass: "fab fa-python", hoverClass: "blue-300" },
        { name: "Vue.js", iconClass: "fab fa-vuejs", hoverClass: "blue-300" },
        { name: "Angular", iconClass: "fab fa-angular", hoverClass: "blue-300" },
        { name: "Sass", iconClass: "fab fa-sass", hoverClass: "blue-300" },
        { name: "Git", iconClass: "fab fa-git-alt", hoverClass: "blue-300" }
    ];
  return (
    <div className="px-6 md:px-24 py-10">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        <div className="flex flex-wrap gap-4">
           { skills.map(skill =>  <Button
            key={skill.name}
            name={skill.name}
            iconClass={skill.iconClass}
            hoverClass={skill.hoverClass}
          />
            )}           
        </div>
    </div>

  )
}

export default Skills