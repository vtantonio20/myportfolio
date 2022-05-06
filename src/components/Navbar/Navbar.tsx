import React, {useEffect, useState} from 'react'
import { Link } from "react-scroll";
import './Navbar.css'
export default function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const toggleMobileMenuList = () => {
        setShowMobileMenu(!showMobileMenu)
    }

    useEffect(() => {
        const changeWidth = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', changeWidth)
        return () => window.removeEventListener('resize', changeWidth)
    }, [])

  return (
    <nav>
        <div className="container" >
            <div className="left-container">
                <div className="logo">VT</div>
            </div>

            <div className="right-container">
            {(showMobileMenu || screenWidth > 800) && (
                <div className='nav-list'>
                        <Link className="navbar-item" to="About" spy={true} smooth={true} offset={-50} duration={500}>About</Link>
                        <Link className="navbar-item" to="Experience" spy={true} smooth={true} offset={-50} duration={500}>Experience</Link>
                        <Link className="navbar-item" to="Skills" spy={true} smooth={true} offset={-50} duration={500}>Skills</Link>
                        <Link className="navbar-item" to="Projects" spy={true} smooth={true} offset={-50} duration={500}>Projects</Link>
                        <Link className="navbar-item" to="Contact" spy={true} smooth={true} offset={-50} duration={500}>Contact</Link>
                        <Link className="navbar-item" id='last-navbar-item' to={'./resume.pdf'} target='_blank' rel='noopener noreferrer'>Resume</Link>
                    </div>
                    )}
                    <div className='toggle-button' onClick={toggleMobileMenuList}>
                        {showMobileMenu
                        ?
                        <div className='x'>
                            <span className='xl'></span>
                            <span className='xr'></span>
                        </div>
                        :
                        <div className='hamburger'>
                            <span className='bar'></span>
                            <span className='bar'></span>
                            <span className='bar'></span>
                        </div>
                        }
                </div>
            </div>
        </div>
        
    </nav>
  )
}
