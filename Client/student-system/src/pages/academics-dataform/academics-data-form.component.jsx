import React from 'react';
import './academics-data-form.styles.css';
import Form from "../../components/form/form.components";
import Button from "../../components/button/button.component";

const AcademicsDataForm = () => {
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
                            setterFunction={{}} />
                    </div>
                    <div className="back-div">
                        <Form label={"Backlog"}
                            type={"text"}
                            name={"back"}
                            placeholder={"YES / NO"}
                            setterFunction={{}} />
                    </div>
                </div>
                <div className="academics-col-form-wrap">
                    <div className="cpi-div">
                        <Form label={"Current CPI"}
                            type={"number"}
                            name={"cpi"}
                            placeholder={"X.YZ"}
                            setterFunction={{}} />
                    </div>
                    <div className="spi-div">
                        <Form label={"SPI"}
                            type={"number"}
                            name={"spi"}
                            placeholder={"X.YZ"}
                            setterFunction={{}} />
                    </div>
                </div>
                <div className="declare-check">
                    <input type="checkbox" className="declare-box" />
                    <p className="declare">I, hereby confirm that all the details provided by me are correct to best of my knowledge.</p>
                </div>
                <div className="academics-btn-form-div">
                    <Button>Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default AcademicsDataForm;