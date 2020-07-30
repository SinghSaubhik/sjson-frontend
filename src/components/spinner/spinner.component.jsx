import React from 'react';
import "./spinner.styles.scss"

const Spinner = (props) => {

    return (
        <div className="spinner">
            <div class="spinner__ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Spinner;