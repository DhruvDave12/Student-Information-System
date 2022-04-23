import React from 'react';
import './form.styles.css';

const Form = ({ label, type, name, placeholder, setterFunction }) => {
    return (
        <div className="field">
            <div className='form'>
                <label for={name} className='label-field'>{label}</label>
                <br />
                <input type={type} onChange = {e=>setterFunction(e.target.value)} className='input-field' placeholder={placeholder} required/>
            </div>
        </div>
    )
}

export default Form;