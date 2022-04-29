import React, { useEffect, useState } from 'react';
import './student-data-form.styles.css';
import Form from '../../components/form/form.components';
import Button from '../../components/button/button.component';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const StudentDataForm = () => {

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [studentID, setStudentID] = useState('');
    const [contact, setContact] = useState('');
    const [dob, setDOB] = useState('');
    const [batch, setBatch] = useState('');
    const [major, setMajor] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const { state } = location;
    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://localhost:3000/student/extra/data', {
            email: state.email,
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            contact: contact,
            batch: batch,
            major: major,
            student_id: studentID,
            dob: dob
        })
        localStorage.setItem('id', res.data.userData.student_id);
        navigate(`/student/${studentID}`);
        window.location.reload(false);
    }

    return (
        <div className="student-data-form">
            <form className="student-data-form-wrap">
                <p className="student-heading">STUDENT DETAILS AS REQUIRED FOR THE DATABASE</p>
                <div className="student-col-form-wrap">
                    <div className="fname-div">
                        <Form label={"First Name"}
                            type={"text"}
                            name={"first"}
                            setterFunction={setFirstName} />
                    </div>
                    <div className="mname-div">
                        <Form label={"Middle Name"}
                            type={"text"}
                            name={"middle"}
                            placeholder={"put 'NULL' if none"}
                            setterFunction={setMiddleName} />
                    </div>
                    <div className="lname-div">
                        <Form label={"Last Name"}
                            type={"text"}
                            name={"last"}
                            setterFunction={setLastName} />
                    </div>
                </div>
                <div className="student-col-form-wrap">
                    <div className="mail-div">
                        <Form label={"Student Id"}
                            type={"number"}
                            name={"stuId"}
                            placeholder={""}
                            setterFunction={setStudentID} />
                    </div>
                    <div className="phone-div">
                        <Form label={"Contact Number"}
                            type={"number"}
                            name={"contact"}
                            setterFunction={setContact} />
                    </div>
                </div>
                <div className="student-col-form-wrap">
                    <div className="dob-div">
                        <Form label={"Date of birth"}
                            type={"date"}
                            name={"dob"}
                            setterFunction={setDOB} />
                    </div>
                    <div className="major-div">
                        <Form label={"Major"}
                            type={"text"}
                            name={"major"}
                            placeholder={"CSE / IT"}
                            setterFunction={setMajor} />
                    </div>
                    <div className="batch-div">
                        <Form label={"Batch"}
                            type={"text"}
                            name={"batch"}
                            placeholder={"20XX - 20XX"}
                            setterFunction={setBatch} />
                    </div>
                </div>
                <div className="declare-check">
                    <input type="checkbox" className="declare-box" />
                    <p className="declare">I, hereby confirm that all the details provided by me are correct to best of my knowledge.</p>
                </div>
                <div className="student-btn-form-div">
                    <Button onClickHandler={handleSubmit}>Submit </Button>
                </div>
            </form>
        </div>
    )
}

export default StudentDataForm;