import React from "react";
import './navbar.styles.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/StudentInfoSys.svg'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="name-logo">
                <img src={logo} alt="StudentInfoSys" />
            </div>
            <nav className="nav-wrap">
                <Link to={'/filter'} className='link' ><p>Filter</p></Link>
                <Link to={'/team'} className='link' ><p>Team</p></Link>
                <Link to={'/about'} className='link'><p>About us</p></Link>
                <Link to={'/contact'} className='link'><p>Contact</p></Link>
                <Link to={'/signup'} className='link' ><p>Sign Up</p></Link>
                <Link to={'/login'} className='link'><p>Log in</p></Link>
            </nav>
        </div>
    )
}

export default NavBar;