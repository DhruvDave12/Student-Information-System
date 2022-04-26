import React from "react";
import './button.styles.css';

const Button = ({children, onClickHandler}) => {
    return(
        <button className="btn" type="submit" onClick={onClickHandler}>
            {children}
        </button>
    )
}

export default Button;