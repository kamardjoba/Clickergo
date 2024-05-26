import React from 'react';

const ProgressBar = ({ current, max }) => {
    const percentage = (current / max) * 100;

    return (
        <div style={{ background: 'orange', height: '20px', borderRadius: '10px', overflow: 'hidden', position: 'relative', width: '100%' }}>
            <div style={{ width: `${percentage}%`, height: '100%', background: 'black' }}></div>
            <p style={{ position: 'absolute', width: '100%', textAlign: 'center', margin: 0, color: 'white' }}>{current} / {max}</p>
        </div>
    );
};

export default ProgressBar;
