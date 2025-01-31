import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar-container flex items-center justify-center'>
        <div className="logo"></div>
        <div className="nav-links flex items-center justify-center gap-10">
            <div className="nav-item">
                <Link className='nav-link' to={'/'}>Home</Link>
            </div>
            <div className="nav-item">
                <Link className='nav-link' to={'/about'}>About</Link>
            </div>
            <div className="nav-item">
                <Link className='nav-link' to={'/ept'}>Elite Private Training</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar