import React from 'react'
import {Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>


  <header id="header" className="header d-flex align-items-center">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <Link  to="/" className="logo d-flex align-items-center">
        <h1>Liwet<span>.</span></h1>
      </Link>
      <nav id="navbar" className="navbar">
       
 

        <ul>
            <li>
           <NavLink to="/">Home</NavLink>
           </li>
           <li>
           <NavLink to="/About">About</NavLink>
           </li>
           <li>
           <NavLink to="/Services">Service</NavLink>
           </li>
           <li>
           <NavLink to="/Project">Project</NavLink>
           </li>
           <li>
           <NavLink to="/Contact">Contact</NavLink>
           </li>



        </ul>
      </nav>
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
    </div>
  </header>
  


      
    </div>
  )
}

export default Header
