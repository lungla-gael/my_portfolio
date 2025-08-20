import Image from "next/image";
import React from 'react'
import SocialLinks from './SocialLinks'

const Hero = () => {
  return (
    <div className="hero min-h-screen">
        <div className="hero-content flex-col text-center">
            <Image
            src="/profile.jpg"
            alt="Profile picture"
            width={300}
            height={600}
            className="rounded-full"
            />
            <div className="max-w-xl">
              <h1 className="text-3xl font-bold">Hello I&apos;m Gaël</h1>
              <p className="py-6">
                  I&apos;m a software developer, IT helpdesk specialist and ardent Cyber Secuirity Enthusiast based in Douala, Cameroon. I specialize in building (and occasionally designing) exceptional websites, applications, and everything in between.
              </p>        
              <SocialLinks />
            </div>
        </div>
    </div>
  )
}

export default Hero