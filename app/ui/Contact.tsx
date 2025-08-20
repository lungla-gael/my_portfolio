import React from 'react'
import { SkillType } from '../dataTypes/SkillType';
import Button from './Button';

const Contact = () => {
    const email: SkillType = { name: "Email Me", iconClass: "fa-solid fa-envelope", hoverClass: "blue-300" }
  return (
    <div className="card bg-base-100 shadow-sm py-7">
        <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl">Get in Touch</h2>
            <p>If you want us to work together, have any question or want me to speak at your event, my inbox is always open. Whether just want to say hi, I&apos;ll try my best to get back to you! Cheers!</p>
            <div className="card-actions">
            <Button name={email.name} iconClass={email.iconClass} hoverClass={email.hoverClass} />
            </div>
        </div>
    </div>
  )
}

export default Contact