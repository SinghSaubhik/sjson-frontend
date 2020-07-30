import React from 'react';
import "./toast.styles.scss";

import { ReactComponent as Check } from "../../assets/success-check.svg";
import { ReactComponent as Cross } from "../../assets/times-circle-regular 2cross.svg";
import { ReactComponent as FillCross } from "../../assets/error.svg";


const Toast = (props) => {
    console.log(props);

    const property = props.property || { msg: "No message", type: "info" };

    const getIcon = (type) => {
        if (type === "info") {
            return <Check className="Toast__icon check" />;
        }
        return <FillCross className="Toast__icon error" />;
    };

    return (
        <div className="Toast">
            {getIcon(property.type)}
            <h1>{property.msg}</h1>
            <Cross className="Toast__icon cross" onClick={props.close} />
        </div>
    );
};

export default Toast;