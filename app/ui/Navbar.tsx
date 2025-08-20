import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
            <Link className="text-3xl font-bold" href={'/'}>Gaël&apos;s Portfolio</Link>
        </div>
        <div className="navbar-end">
            <Link className="text-black btn btn-btn-square btn-xl btn-secondary rounded-md " href={''}>Resume</Link>
        </div>
    </div>
  )
}

export default Navbar