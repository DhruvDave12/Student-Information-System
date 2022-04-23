import React from 'react';
import './form.styles.css';

const Form = ({ label, type, name, placeholder, ...otherProps }) => {
    return (
        <div className="field">
            <form className='form'>
                <label for={name} className='label-field'>{label}</label>
                <br />
                <input type={type} name={name} className='input-field' placeholder={placeholder} {...otherProps} required/>
            </form>
        </div>
    )
}

export default Form;