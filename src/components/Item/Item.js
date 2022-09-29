import React from 'react';
import './Item.css'

const Item = (props) => {
    const { name, timeRe, img, age } = props.item;
    return (
        <div className='item'>
            <img src={img} alt="" />
            <div className='information'>
                <h2>{name}</h2>
                <p>Time: {timeRe}s</p>
                <p>Expected Age: {age}</p>
            </div>
            <button className='list-add'>Add To List</button>
        </div>
    );
};

export default Item;