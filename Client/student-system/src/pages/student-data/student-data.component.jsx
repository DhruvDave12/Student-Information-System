import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Form from "../../components/form/form.components";
import Button from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";
const StudentData = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [contact, setContact] = useState('');
    const [dob, setDOB] = useState('');
    const [major, setMajor] = useState('');
    const [batch, setBatch] = useState('');
    const [studentID, setStudentID] = useState('');

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
    }
    return (
        <div className="student__data">
            <form onSubmit={handleSubmit}>
                <Form label={"First Name"} placeholder={"First Name"} type={"text"} setterFunction={setFirstName} name={"firstName"}/>
                <Form label={"Middle Name"} placeholder={"Middle Name"} type={"text"} setterFunction={setMiddleName} name={"middleName"}/>
                <Form label={"Last Name"} placeholder={"Last Name"} type={"text"} setterFunction={setLastName} name={"lastName"}/>
                <Form label={"Student ID"} placeholder={"Student ID"} type={"text"} setterFunction={setStudentID} name={"studentID"}/>
                <Form label={"Contact"} placeholder={"Contact"} type={"text"} setterFunction={setContact} name={"contact"}/>
                <Form label={"Major"} placeholder={"Major"} type={"text"} setterFunction={setMajor} name={"major"}/>
                <Form label={"DOB"} placeholder={"yyyy-mm-dd"} type={"text"} setterFunction={setDOB} name={"dob"}/>
                <Form label={"Batch"} placeholder={"Batch"} type={"text"} setterFunction={setBatch} name={"batch"}/>         
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default StudentData;