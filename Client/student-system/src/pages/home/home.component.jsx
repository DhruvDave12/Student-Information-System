import React from "react";
import './home.styles.css';
import HomeImg from '../../assets/images/home-base.svg';

const Home = () => {
    return (
        <div className="home">
            <div className="home-title">
                <p>WELCOME TO <br /> STUDENT INFORMATION SYSTEM</p>
            </div>
            <div className="home-img">
                <img src={HomeImg} alt="Home" />
            </div>
        </div>
    )
}

export default Home;