import React from 'react';
import './Exercise.css'

const Exercise = () => {
    return (
        <div style={{ paddingBottom: 40 }}>

            <h4>Exercise Details</h4>
            <div className='exercise-break-time'>
                <h5>Exercise Time</h5>
            </div>
            <div className='exercise-break-time'>
                <h5>Break Time</h5>
            </div>
            <button className='TaskDoneButton'>Task Done</button>
        </div>
    );
};

export default Exercise;