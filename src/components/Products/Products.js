import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import Profile from '../Profile/Profile';
import './Products.css'

const Products = () => {
    const [items, setItems] = useState([]);
    const [active, setactive] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const clickHandle = (item) => {
        const newActive = [...active, item];
        setactive(newActive);
    }

    return (
        <div >
            <h1 className='header'>Digital-GYM</h1>
            <h3 className='your-item'>Select Your Excersize Items</h3>
            <div className='mainPage'>

                <div className='cart-container'>
                    {
                        items.map(item => <Item
                            key={item.id}
                            item={item}
                            clickHandle={clickHandle}></Item>)
                    }
                </div>
                <div > <Profile active={active}></Profile></div>
            </div >


        </div>
    );
};

export default Products;