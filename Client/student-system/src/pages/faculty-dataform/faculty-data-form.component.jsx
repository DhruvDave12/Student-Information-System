import React from "react";
import './faculty-data-form.styles.css';
import Form from "../../components/form/form.components";
import Button from "../../components/button/button.component";

const FacultyDataForm = () => {

    return (
        <div className="faculty-data-form">
            <form className="faculty-data-form-wrap">
                <p className="faculty-heading">FACULTY DETAILS AS REQUIRED FOR THE DATABASE</p>
                <div className="faculty-col-form-wrap">
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
                <div className="faculty-col-form-wrap">
                    <div className="mail-div">
                        <Form label={"Faculty Id"}
                            type={"number"}
                            name={"facId"}
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
                <div className="declare-check">
                    <input type="checkbox" className="declare-box" />
                    <p className="declare">I, hereby confirm that all the details provided by me are correct to best of my knowledge.</p>
                </div>
                <div className="faculty-btn-form-div">
                    <Button>Submit </Button>
                </div>
            </form>
        </div>
    )

}

export default FacultyDataForm;