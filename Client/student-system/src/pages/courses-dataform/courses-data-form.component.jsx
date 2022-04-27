import React, { useState } from 'react';
import './courses-data-form.styles.css';
import Form from '../../components/form/form.components';
import Button from '../../components/button/button.component';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CourseDataForm = () => {
    const navigate = useNavigate();

    const [facultyID, setFacultyID] = useState('');
    const [semester, setSemester] = useState('');
    const [course, setCourse] = useState('');
    const [credit, setCourseCredit] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:3000/course/data', {
            faculty_id: facultyID,
            course_id: course,
            semester: semester,
            credits: credit,
        })
        
        navigate('/courses');   
    }
    return(
        <div className="courses-data-form">
            <form className="courses-data-form-wrap">
                <p className="courses-heading">COURSE TAUGHT BY FACULTY IN SPECIFIC SEMESTER</p>
                <div className="courses-col-form-wrap">
                    <div className="id-div">
                        <Form label={"Faculty Id"}
                            type={"number"}
                            name={"facId"}
                            placeholder={""}
                            setterFunction={setFacultyID} />
                    </div>
                    <div className="sem-div">
                        <Form label={"Semester"}
                            type={"number"}
                            name={"sem"}
                            setterFunction={setSemester} />
                    </div>
                </div>
                <div className="courses-col-form-wrap">
                    <div className="course-div">
                        <Form label={"Course Id"}
                            type={"text"}
                            name={"course"}
                            placeholder={"XY123"}
                            setterFunction={setCourse} />
                    </div>
                    <div className="credit-div">
                        <Form label={"Course Credits"}
                            type={"text"}
                            name={"credits"}
                            placeholder={"$ - $ - $ - $"}
                            setterFunction={setCourseCredit} />
                    </div>
                </div>
                <div className="declare-check">
                    <input type="checkbox" className="declare-box" />
                    <p className="declare">I, hereby confirm that all the details provided by me are correct to best of my knowledge.</p>
                </div>
                <div className="courses-btn-form-div">
                    <Button onClickHandler={handleSubmit}>Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default CourseDataForm;