import React, { useEffect, useState } from "react";
import "./navbar.styles.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/StudentInfoSys.svg";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [idInLS, setIdInLS] = useState();
  useEffect(() => {
    if (!isLogin) {
      setIdInLS(localStorage.getItem("id"));
    }
    if (idInLS) {
      setIsLogin(true);
    }

  }, [idInLS])

  const typeOfUser = localStorage.getItem('type');

  const handleSignOut = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('type');

    navigate('/');
    window.location.reload(false);
  }
  return (
    <div className="navbar">
      <div className="name-logo" style={{cursor: "pointer"}} onClick={() => {navigate('/')}}>
        <img src={logo} alt="StudentInfoSys" />
      </div>
      <nav className="nav-wrap">
        {
          isLogin && typeOfUser === "faculty" ?
            <Link to={'/students/all'} className="link"><p>All Students</p></Link>
            :
            ""
        }
        {
          isLogin && typeOfUser === "student" ?
            <Link to={'/faculties/all'} className="link"><p>All Faculties</p></Link>
            :
            ""
        }
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
          <div className="auth-out">
            <Link to={typeOfUser === "student" ? `/student/${idInLS}` : `/faculty/${idInLS}`} className="link">
              <p>Profile</p>
            </Link>
            <div className="link" style={{ cursor: "pointer" }} onClick={handleSignOut}>
              <p>Sign out</p>
            </div>
          </div>
        ) : (
          <div className="auth-in">
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
