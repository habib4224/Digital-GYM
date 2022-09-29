import React, { useState } from 'react';
import './Profile.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = (props) => {

    const [offtime, setOfftime] = useState([]);
    const { acti } = props;

    const breakClick = (t) => {

        console.log(t.target.innerText);
        const newSetC = [t.target.innerText];
        setOfftime(newSetC);
    }
    let total = 0;
    for (const role of acti) {
        total = total + role.timeRe;
    }

    const toastify = () => {
        toast("Wow Congratulation !", { position: "top-center" });
    }
    return (
        <div>
            <div className='profile-pic'>
                <img src="profile.jpg" alt="" />
                <div className='profile-information'>
                    <h4 style={{ marginBottom: 0 }}>Habibur Rahaman</h4>
                    <p style={{ opacity: .8, marginTop: 0 }}><small>From: Tangail, Dhaka.</small></p>
                </div>
            </div>

            <div className="other-information">
                <div>
                    <h4 style={{ marginBottom: 0 }}>65kg</h4>
                    <p style={{ opacity: .8, marginTop: 0 }}>Weight</p>
                </div>
                <div style={{ marginLeft: 18 }}>
                    <h4 style={{ marginBottom: 0 }}>25 Years</h4>
                    <p style={{ opacity: .6, marginTop: 0 }}>Age</p>
                </div>
                <div style={{ marginLeft: 18 }}>
                    <h4 style={{ marginBottom: 0 }}>5.5'</h4>
                    <p style={{ opacity: .7, marginTop: 0 }}>Height</p>
                </div>

            </div>

            <div className="break">
                <h4>Add a Break</h4>
                <div className="break-time">
                    <button onClick={(t) => breakClick(t)} className='seconds'><span>10</span>s</button>
                    <button onClick={(t) => breakClick(t)} className='seconds'><span>20</span>s</button>
                    <button onClick={(t) => breakClick(t)} className='seconds'><span>30</span>s</button>
                    <button onClick={(t) => breakClick(t)} className='seconds'><span>40</span>s</button>


                </div>
            </div>
            <div style={{ paddingBottom: 40 }}>

                <h4>Exercise Details</h4>
                <div className='exercise-break-time'>
                    <h5>Exercise Time:</h5>
                    <p>{total} Seconds</p>
                </div>
                <div className='exercise-break-time'>
                    <h5>Break Time:</h5>
                    <p>{offtime} Seconds</p>
                </div>
                <button onClick={toastify} className='button-task'>Task Complete</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Profile;