import React from 'react';
import Products from '../Products/Products';
import Profile from '../Profile/Profile';
import './First.css'

const First = () => {
    return (
        <div className='mainPage'>
            <Products></Products>
            <Profile></Profile>
        </div>
    );
};

export default First;