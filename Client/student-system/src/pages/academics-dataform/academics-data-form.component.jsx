import React, { useState } from 'react';
import './academics-data-form.styles.css';
import Form from "../../components/form/form.components";
import Button from "../../components/button/button.component";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AcademicsDataForm = () => {
    const navigate = useNavigate();

    const [studentID, setStudentID] = useState('');
    const [backlog, setBacklog] = useState('');
    const [cpi, setCPI] = useState('');
    const [currentSPI, setCurrentSPI] = useState('');

    const handleSubmitAcademics = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/academics/data', {
            student_id: studentID,
            backlog: backlog,
            current_cpi: cpi,
            spi: currentSPI
        });

        navigate(`/academics/${studentID}`);
        window.location.reload(false);
    }

    return (
        <div className="academics-data-form">
            <form className="academics-data-form-wrap">
                <p className="academics-heading">ACADEMIC DETAILS AS TO BE FILLED BY FACULTY</p>
                <div className="academics-col-form-wrap">
                    <div className="id-div">
                        <Form label={"Student Id"}
                            type={"number"}
                            name={"stuId"}
                            placeholder={""}
                            setterFunction={setStudentID} />
                    </div>
                    <div className="back-div">
                        <Form label={"Backlog"}
                            type={"text"}
                            name={"back"}
                            placeholder={"YES / NO"}
                            setterFunction={setBacklog} />
                    </div>
                </div>
                <div className="academics-col-form-wrap">
                    <div className="cpi-div">
                        <Form label={"Current CPI"}
                            type={"number"}
                            step={"any"}
                            name={"cpi"}
                            placeholder={"X.YZ"}
                            setterFunction={setCPI} />
                    </div>
                    <div className="spi-div">
                        <Form label={"SPI"}
                            type={"number"}
                            step={"any"}
                            name={"spi"}
                            placeholder={"X.YZ"}
                            setterFunction={setCurrentSPI} />
                    </div>
                </div>
                <div className="declare-check">
                    <input type="checkbox" className="declare-box" />
                    <p className="declare">I, hereby confirm that all the details provided by me are correct to best of my knowledge.</p>
                </div>
                <div className="academics-btn-form-div">
                    <Button onClickHandler={handleSubmitAcademics}>Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default AcademicsDataForm;