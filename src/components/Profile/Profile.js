import React from 'react';
import './Profile.css'

const Profile = () => {
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
                    <p className='seconds'>20s</p>
                    <p className='seconds'>30s</p>
                    <p className='seconds'>40s</p>
                    <p className='seconds'>50s</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;