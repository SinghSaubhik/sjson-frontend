import React, { useEffect } from 'react';
import Switch from "react-switch";
import "./header.styles.scss";

const Headers = (props) => {

    useEffect(() => {
    }, []);

    return (
        <div className="header">
            <div className="header__logo">
                <h2>Sjson</h2>
            </div>

            <div className="header__switch">
                <span>Light</span>
                <Switch
                    checked={props.darkMode}
                    onChange={props.toggle}
                    onColor="#86d3ff"
                    onHandleColor="#2693e6"
                    handleDiameter={30}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={48}
                    id="material-switch"
                />
                <span>Dark</span>

            </div>
        </div>



    );

};

export default Headers;