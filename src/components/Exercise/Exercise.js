import React from 'react';
import './Exercise.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Exercise = () => {
    const toastify = () => {
        toast("Wow Congratulation !", { position: "top-center" });
    }
    return (
        <div style={{ paddingBottom: 40 }}>

            <h4>Exercise Details</h4>
            <div className='exercise-break-time'>
                <h5>Exercise Time:</h5>
            </div>
            <div className='exercise-break-time'>
                <h5>Break Time:</h5>
            </div>
            <button onClick={toastify} className='button-task'>Task Complete</button>
            <ToastContainer />
        </div>
    );
};

export default Exercise;