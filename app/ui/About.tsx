import React from 'react'
import Image from "next/image";

const About = () => {
  return (
    <main className="flex flex-col items-center px-6 md:px-24">
        <h1 className="py-10 text-4xl font-bold text-center">About Me</h1>

        <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8 items-stretch">
            <div className="flex-1 flex flex-col justify-center">
            <p className="mb-4">
                As a developer, I have always been passionate about creating elegant and effective solutions to complex problems. I have a strong foundation in software development, with a focus on web technologies such as HTML, CSS, and JavaScript. I enjoy working on both the front-end and back-end of applications, and I am always looking for ways to optimize performance, improve user experience, and ensure the highest level of code quality.
            </p>
            <p>
                As a developer, I have always been passionate about creating elegant and effective solutions to complex problems. I have a strong foundation in software development, with a focus on web technologies such as HTML, CSS, and JavaScript. I enjoy working on both the front-end and back-end of applications, and I am always looking for ways to optimize performance, improve user experience, and ensure the highest level of code quality.
            </p>
            </div>

            <div className="flex-1 relative w-full md:h-auto h-64">
            <Image
                src="/sanja 2.jpg"
                alt="Profile picture"
                fill
                className="object-cover rounded-lg"
            />
            </div>
        </div>
        </main>
  )
}

export default About