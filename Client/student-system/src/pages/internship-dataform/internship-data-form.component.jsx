import React, { useState } from 'react';
import './internship-data-form.styles.css';
import Form from "../../components/form/form.components";
import Button from "../../components/button/button.component";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const InternshipDataForm = () => {
    const navigate = useNavigate();
    
    const [studentID, setStudentID] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [position, setPosition] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://localhost:3000/internship/extra/data',{
            company_name: companyName,
            position: position,
            duration: duration,
            student_id: studentID
        });

        console.log(res);
        navigate(`/student/${studentID}`, {
            state: {
                internData: res.data.data
            }
        })
    }

    return (
        <div className="internship-data-form">
            <form className="internship-data-form-wrap">
                <p className="internship-heading">INTERNSHIP DETAILS AS TO BE FILLED BY STUDENT</p>
                <div className="internship-col-form-wrap">
                    <div className="id-div">
                        <Form label={"Student Id"}
                            type={"number"}
                            name={"stuId"}
                            placeholder={""}
                            setterFunction={setStudentID} />
                    </div>
                    <div className="company-div">
                        <Form label={"Company Name"}
                            type={"text"}
                            name={"company"}
                            setterFunction={setCompanyName} />
                    </div>
                </div>
                <div className="internship-col-form-wrap">
                    <div className="position-div">
                        <Form label={"Position"}
                            type={"text"}
                            name={"position"}
                            placeholder={"DESIGNER, DEVELOPER ETC."}
                            setterFunction={setPosition} />
                    </div>
                    <div className="duration-div">
                        <Form label={"Duration"}
                            type={"text"}
                            name={"duration"}
                            placeholder={"duration of the internship"}
                            setterFunction={setDuration} />
                    </div>
                </div>
                <div className="declare-check">
                    <input type="checkbox" className="declare-box" />
                    <p className="declare">I, hereby confirm that all the details provided by me are correct to best of my knowledge.</p>
                </div>
                <div className="internship-btn-form-div">
                    <Button onClickHandler={handleSubmit}>Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default InternshipDataForm;