import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ current, max }) => {
    const percentage = (current / max) * 100;

    return (
        <div className="progress-bar">
           
        </div>
    );
};

export default ProgressBar;
