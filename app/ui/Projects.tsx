import React from 'react'
import Card from './Card'
import { ProjectType } from '../dataTypes/ProjectType';

const Projects = () => {
  const projects: ProjectType[] = [
    {name: "nextjs-dashboard", description: "Used a starter template for the Next.js App Router Course and created a dashboard app.", link:"https://nextjs-dashboard-lungla-gaels-projects.vercel.app/"},
    {name: "tic-tac-toe-python", description: "Console tic tac toe game", link:"https://github.com/lungla-gael/tic-tac-toe-python-"},
    {name: "Gael's Blog", description: "Built blogging Website with python and Flask and deployed", link:"https://github.com/lungla-gael/Gaels-blog"},
    {name: "Insagram Clone", description: "Built an instagram clone", link:"https://github.com/lungla-gael/instagram-clone"},
    {name: "Amazon Clone", description: "Built an Amazon Clone", link:"https://github.com/lungla-gael/amazon-clone"},
    {name: "React Task Tracker", description: "Built a React task tracker application.", link:"https://github.com/lungla-gael/react-task-tracker"},
    {name: "Hangman", description: "Built Hangman COnsole game with Ruby", link:"https://github.com/lungla-gael/Hangman"}
  ]
  return (    
    <div className="px-6 md:px-24 py-10">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="flex flex-wrap gap-6">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects