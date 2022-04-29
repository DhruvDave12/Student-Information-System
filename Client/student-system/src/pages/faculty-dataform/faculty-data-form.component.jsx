import React, { useState } from "react";
import './faculty-data-form.styles.css';
import Form from "../../components/form/form.components";
import Button from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

const FacultyDataForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [facultyID, setFacultyID] = useState('');
    const [contact, setContact] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const { state } = location;
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/faculty/extra/data', {
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            faculty_id: facultyID,
            contact: contact,
            email: state.email
        })
        localStorage.setItem('id', res.data.data.faculty_id);
        navigate(`/faculty/${facultyID}`);
        window.location.reload(false);
    }

    return (
        <div className="faculty-data-form">
            <form className="faculty-data-form-wrap">
                <p className="faculty-heading">FACULTY DETAILS AS REQUIRED FOR THE DATABASE</p>
                <div className="faculty-col-form-wrap">
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
                <div className="faculty-col-form-wrap">
                    <div className="mail-div">
                        <Form label={"Faculty Id"}
                            type={"number"}
                            name={"facId"}
                            placeholder={""}
                            setterFunction={setFacultyID} />
                    </div>
                    <div className="phone-div">
                        <Form label={"Contact Number"}
                            type={"number"}
                            name={"contact"}
                            setterFunction={setContact} />
                    </div>
                </div>
                <div className="declare-check">
                    <input type="checkbox" className="declare-box" />
                    <p className="declare">I, hereby confirm that all the details provided by me are correct to best of my knowledge.</p>
                </div>
                <div className="faculty-btn-form-div">
                    <Button onClickHandler={handleSubmit}>Submit </Button>
                </div>
            </form>
        </div>
    )

}

export default FacultyDataForm;