import React from 'react'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal p-4 py-20">
        <aside className='pl-50'>
            <p>© {new Date().getFullYear()} Gaël&apos;s Portfolio</p>
        </aside>
        <SocialLinks />
    </footer>
  )
}

export default Footer