import React, { useState } from 'react';
import './curricular-data-form.styles.css';
import Form from '../../components/form/form.components';
import Button from '../../components/button/button.component';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CurricularDataForm = () => {
    const navigate = useNavigate();

    const [studentID, setStudentID] = useState('');
    const [committee, setCommittee] = useState('');
    const [clubs, setClubs] = useState('');
    const [events, setEvents] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/curricular/data',{
            student_id: studentID, 
            committee: committee, 
            clubs: clubs, 
            events: events
        });

        navigate(`/student/${studentID}`);
    }
    return (
        <div className="curricular-data-form">
            <form className="curricular-data-form-wrap">
                <p className="curricular-heading">CURRICULAR ACTIVITY DETAILS AS TO BE FILLED BY STUDENT</p>
                <div className="curricular-col-form-wrap">
                    <div className="id-div">
                        <Form label={"Student Id"}
                            type={"number"}
                            name={"stuId"}
                            placeholder={""}
                            setterFunction={setStudentID} />
                    </div>
                    <div className="comm-div">
                        <Form label={"Committee"}
                            type={"text"}
                            name={"committee"}
                            placeholder={"give list of committees"}
                            setterFunction={setCommittee} />
                    </div>
                </div>
                <div className="curricular-col-form-wrap">
                    <div className="club-div">
                        <Form label={"Clubs"}
                            type={"text"}
                            name={"clubs"}
                            placeholder={"give list of clubs"}
                            setterFunction={setClubs} />
                    </div>
                    <div className="event-div">
                        <Form label={"Events"}
                            type={"text"}
                            name={"events"}
                            placeholder={"give list of events"}
                            setterFunction={setEvents} />
                    </div>
                </div>
                <div className="declare-check">
                    <input type="checkbox" className="declare-box" />
                    <p className="declare">I, hereby confirm that all the details provided by me are correct to best of my knowledge.</p>
                </div>
                <div className="curricular-btn-form-div">
                    <Button onClickHandler={handleSubmit}>Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default CurricularDataForm;