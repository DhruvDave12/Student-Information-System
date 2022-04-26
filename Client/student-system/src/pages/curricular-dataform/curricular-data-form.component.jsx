import React from 'react';
import './curricular-data-form.styles.css';
import Form from '../../components/form/form.components';
import Button from '../../components/button/button.component';

const CurricularDataForm = () => {
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
                            setterFunction={{}} />
                    </div>
                    <div className="comm-div">
                        <Form label={"Committee"}
                            type={"text"}
                            name={"committee"}
                            placeholder={"give list of committees"}
                            setterFunction={{}} />
                    </div>
                </div>
                <div className="curricular-col-form-wrap">
                    <div className="club-div">
                        <Form label={"Clubs"}
                            type={"text"}
                            name={"clubs"}
                            placeholder={"give list of clubs"}
                            setterFunction={{}} />
                    </div>
                    <div className="event-div">
                        <Form label={"Events"}
                            type={"text"}
                            name={"events"}
                            placeholder={"give list of events"}
                            setterFunction={{}} />
                    </div>
                </div>
                <div className="declare-check">
                    <input type="checkbox" className="declare-box" />
                    <p className="declare">I, hereby confirm that all the details provided by me are correct to best of my knowledge.</p>
                </div>
                <div className="curricular-btn-form-div">
                    <Button>Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default CurricularDataForm;