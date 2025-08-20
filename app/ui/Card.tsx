import React from 'react'
import { ProjectType } from '../dataTypes/ProjectType';
import Link from 'next/link';

const Card = ({...project}: ProjectType) => {
  return (
    <div className="card card-border border-white bg-base-100 w-70">
        <div className="flex justify-between items-center px-4 py-2">
            <i className="fa-solid fa-folder text-yellow-500 text-3xl"></i>
            <Link href={project.link} target='_blank'>
                <i className="fa-brands fa-github text-2xl"></i>   
            </Link>
        </div>
        <div className="card-body">
            <h2 className="card-title">{project.name}</h2>
            <p>{project.description}</p>
        </div>
    </div>
  )
}

export default Card