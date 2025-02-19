import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [isClick, setIsClick] = useState(false)
  return (
    <nav className='navbar-container flex items-center justify-between px-10'>
        <div className="logo h-16 w-16">
            <img src="/metaverse.png" alt="logo" className='h-full w-full' />
        </div>

        


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
            <div className="hamburger-container h-[20px] w-7 relative" onClick={()=>setIsClick(!isClick)}>
            <div className={`lines line-1 ${isClick?'open':'close'}`}></div>
            <div className={`lines line-2 ${isClick?'open':'close'}`}></div>
            <div className={`lines line-3 ${isClick?'open':'close'}`}></div>
            <div className={`line-4 w-3 h-1 absolute bg-white top-1/2 -translate-y-1/2 right-[1px] transition-all duration-200 rounded  ${isClick?'delay-[250ms] rotate-45':'rotate-0'}`} style={{transformOrigin:'right center'}}></div>
            <div className={`line-5 w-3 h-1 absolute bg-white top-1/2 -translate-y-1/2 right-[1px] transition-all duration-150 rounded  ${isClick?'delay-[250ms] -rotate-45':'rotate-0'}`} style={{transformOrigin:'right center'}}></div>
            <div className={`line-6 w-6 h-1 bg-white absolute rounded top-1/2 -translate-y-1/2 transition-all duration-200 ${isClick?'delay-[250ms] -right-4 rotate-90':'rotate-0 right-0'}`}></div>
        </div>
        </div>

    </nav>
  )
}

export default Navbar