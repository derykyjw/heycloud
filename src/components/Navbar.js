import React, {useState} from 'react'
import {Link} from 'gatsby'
import {FaAlignJustify} from "react-icons/fa"
// import logo from "../assets/images/logo.png"
import { StaticImage } from 'gatsby-plugin-image'

export default function Navbar() {
  const [show, setShow] = useState(false)
  return (
    <nav className='navbar'>
      <div className="nav-center">
        <div className="nav-header">
          <Link to='/'>
            {/* <img src= {logo} alt="HeyCloud" /> */}
            <StaticImage 
              src="../assets/images/logo.png" 
              alt="HeyCloud"
              placeholder='tracedSVG'
            />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FaAlignJustify />
          </button>
        </div>

        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link 
            to='/' 
            className='nav-link' 
            activeClassName='active-link'
            onClick={() => setShow(false)}
          >
            Home
          </Link>
          <Link 
            to='/about' 
            className='nav-link' 
            activeClassName='active-link'
            onClick={() => setShow(false)}
          >
            About
          </Link>
          <Link 
            to='/contact' 
            className='nav-link' 
            activeClassName='active-link'
            onClick={() => setShow(false)}
          >
            Contact
          </Link>
        </div>

      </div>
      
    </nav>
  )
}
