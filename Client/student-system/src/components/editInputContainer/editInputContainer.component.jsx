import React from "react";
import "./editInputContainer.styles.css";

const EditForm = ({ label, type, name, setterFunction, defaultValue }) => {
    return (
        <div className="field">
            <div className='form'>
                <label for={name} className='label-field'>{label}</label>
                <input type={type} defaultValue = {defaultValue} onChange={e => setterFunction(e.target.value)} className='input-field' required />
            </div>
        </div>
    )
}

export default EditForm;