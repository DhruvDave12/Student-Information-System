import React from 'react';
import './teamdata.styles.css';
import git from '../../assets/social/git.svg'
import linked from '../../assets/social/linkedin.svg'
import insta from '../../assets/social/instagram.svg'
import mail from '../../assets/social/mail.svg'

const TeamData = ({ image, name, position, gitlink, linkedlink, instalink, maillink }) => {
    console.log(name);
    return (
        <div className="team-data">
            <div className="img-container">
                <img src={image} alt="img" />
            </div>
            <div className="team-info">
                <p className='person-title'>{name}</p>
                <p className='person-position'>{position}</p>
            </div>
            <div className="social">
                <a href={gitlink}><img src={git} alt="git" className="social-links git" /></a>
                <a href={linkedlink}><img src={linked} alt="linked" className="social-links linked" /></a>
                <a href={instalink}><img src={insta} alt="insta" className="social-links insta" /></a>
                <a href={maillink}><img src={mail} alt="mail" className="social-links mail" /></a>
            </div>
        </div>
    )
}

export default TeamData;