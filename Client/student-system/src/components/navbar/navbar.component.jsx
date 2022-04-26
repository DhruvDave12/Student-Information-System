import React, { useEffect, useState } from "react";
import "./navbar.styles.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/StudentInfoSys.svg";

const NavBar = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [idInLS, setIdInLS] = useState();
    useEffect(() => {
        if(!isLogin){
            setIdInLS(localStorage.getItem("id"));
        }
        if (idInLS) {
            setIsLogin(true);
        } 
        
    }, [idInLS])

    return (
    <div className="navbar">
      <div className="name-logo">
        <img src={logo} alt="StudentInfoSys" />
      </div>
      <nav className="nav-wrap">
        <Link to={"/filter"} className="link">
          <p>Filter</p>
        </Link>
        <Link to={"/team"} className="link">
          <p>Team</p>
        </Link>
        <Link to={"/about"} className="link">
          <p>About us</p>
        </Link>
        <Link to={"/contact"} className="link">
          <p>Contact</p>
        </Link>
        {isLogin ? (
          <Link to={`/profile/${idInLS}`} className="link">
            <p>Profile</p>
          </Link>
        ) : (
          <div className="auth">
            <Link to={"/signup"} className="link">
              <p>Sign Up</p>
            </Link>
            <Link to={"/login"} className="link">
              <p>Log in</p>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};
export default NavBar;
