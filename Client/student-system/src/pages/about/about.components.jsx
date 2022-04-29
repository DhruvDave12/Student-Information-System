import React from 'react';
import './about.styles.css';
import AboutImg from '../../assets/images/about.svg';

const About = () => {
    return (
        <div className="about">
            <div className="about-info">
                <p className="title">
                    PROJECT IDEA
                </p>
                <p className='info'>The objective of Student information System is to allow the faculty of
                    institute to edit and find out the personal details of a student.
                    It will also facilitate keeping all the records of students, such as their id, name, mailing address,
                    phone number, DOB etc. So all the information about an student will be available in a few seconds.
                </p>
                <p className='info'>
                    Student Information would contain their Academics data, co-curricular data, internship data, courses enrolled data etc.
                </p>
            </div>
            <div className="about-img">
                <img src={AboutImg} alt="About" />
            </div>
        </div>
    )
}

export default About;