import React from 'react'
import { SkillType } from '../dataTypes/SkillType';

const Button = ({name, iconClass, hoverClass}: SkillType) => {
  return (    
         <button
            className={`btn text-black btn-soft btn-xl bg-gray-200 hover:bg-${hoverClass} rounded-lg gap-2`}
            >
            <i className={iconClass}></i>
            {name}
        </button>

  )
}

export default Button