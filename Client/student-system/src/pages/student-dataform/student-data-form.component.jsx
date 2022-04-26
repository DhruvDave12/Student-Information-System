import React from 'react';
import './student-data-form.styles.css';
import Form from '../../components/form/form.components';
import Button from '../../components/button/button.component';

const StudentDataForm = () => {
    return (
        <div className="student-data-form">
            <form className="student-data-form-wrap">
                <p className="student-heading">STUDENT DETAILS AS REQUIRED FOR THE DATABASE</p>
                <div className="student-col-form-wrap">
                    <div className="fname-div">
                        <Form label={"First Name"}
                            type={"text"}
                            name={"first"}
                            setterFunction={{}} />
                    </div>
                    <div className="mname-div">
                        <Form label={"Middle Name"}
                            type={"text"}
                            name={"middle"}
                            placeholder={"put 'NULL' if none"}
                            setterFunction={{}} />
                    </div>
                    <div className="lname-div">
                        <Form label={"Last Name"}
                            type={"text"}
                            name={"last"}
                            setterFunction={{}} />
                    </div>
                </div>
                <div className="student-col-form-wrap">
                    <div className="mail-div">
                        <Form label={"Student Id"}
                            type={"number"}
                            name={"stuId"}
                            placeholder={""}
                            setterFunction={{}} />
                    </div>
                    <div className="phone-div">
                        <Form label={"Contact Number"}
                            type={"number"}
                            name={"contact"}
                            setterFunction={{}} />
                    </div>
                </div>
                <div className="student-col-form-wrap">
                    <div className="dob-div">
                        <Form label={"Date of birth"}
                            type={"date"}
                            name={"dob"}
                            setterFunction={{}} />
                    </div>
                    <div className="major-div">
                        <Form label={"Major"}
                            type={"dropdown"}
                            name={"major"}
                            placeholder={"CSE / IT"}
                            setterFunction={{}} />
                    </div>
                    <div className="batch-div">
                        <Form label={"Batch"}
                            type={"number"}
                            name={"bacth"}
                            placeholder={"20XX - 20XX"}
                            setterFunction={{}} />
                    </div>
                </div>
                <div className="declare-check">
                    <input type="checkbox" className="declare-box" />
                    <p className="declare">I, hereby confirm that all the details provided by me are correct to best of my knowledge.</p>
                </div>
                <div className="student-btn-form-div">
                    <Button>Submit </Button>
                </div>
            </form>
        </div>
    )
}

export default StudentDataForm;