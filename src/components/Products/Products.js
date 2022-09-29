import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Products.css'

const Products = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h1 className='header'>Digital GYM</h1>
            <h3 className='your-item'>Select Your Excersize Items</h3>
            <div className='items-part'>
                {
                    items.map(item => <Item
                        key={item.id}
                        item={item}></Item>)
                }
            </div>
        </div>
    );
};

export default Products;