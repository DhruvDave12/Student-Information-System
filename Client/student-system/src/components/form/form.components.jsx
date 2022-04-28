import React from 'react';
import './form.styles.css';

const Form = ({ label, type, name, placeholder, value, step, defaultValue, setterFunction }) => {
    return (
        <div className="field">
            <div className='form'>
                <label for={name} className='label-field'>{label}</label>
                <input type={type} onChange={e => setterFunction(e.target.value)} className='input-field' defaultValue={defaultValue} placeholder={placeholder} value={value} step={step} required />
            </div>
        </div>
    )
}

export default Form;