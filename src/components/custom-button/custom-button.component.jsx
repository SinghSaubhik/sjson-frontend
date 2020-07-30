import React from 'react';
import "./custom-button.styles.scss";


const CustomButton = (props) => {
    const text = props.text || "Button";
    return (
        <div className="custom-button">
            <button onClick={props.onclick}>{text}</button>
        </div>
    );
};

export default CustomButton;