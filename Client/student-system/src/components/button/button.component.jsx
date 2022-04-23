import React from "react";
import './button.styles.css';

const Button = ({children}) => {
    return(
        <button className="btn" type="submit">
            {children}
        </button>
    )
}

export default Button;