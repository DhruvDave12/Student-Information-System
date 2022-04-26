import React from 'react';
import './courses-data-form.styles.css';
import Form from '../../components/form/form.components';
import Button from '../../components/button/button.component';

const CourseDataForm = () => {
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
                            setterFunction={{}} />
                    </div>
                    <div className="sem-div">
                        <Form label={"Semester"}
                            type={"number"}
                            name={"sem"}
                            setterFunction={{}} />
                    </div>
                </div>
                <div className="courses-col-form-wrap">
                    <div className="course-div">
                        <Form label={"Course Id"}
                            type={"text"}
                            name={"course"}
                            placeholder={"XY123"}
                            setterFunction={{}} />
                    </div>
                    <div className="credit-div">
                        <Form label={"Course Credits"}
                            type={"number"}
                            name={"credits"}
                            placeholder={"$ - $ - $ - $"}
                            setterFunction={{}} />
                    </div>
                </div>
                <div className="declare-check">
                    <input type="checkbox" className="declare-box" />
                    <p className="declare">I, hereby confirm that all the details provided by me are correct to best of my knowledge.</p>
                </div>
                <div className="courses-btn-form-div">
                    <Button>Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default CourseDataForm;