//async get from database function()
//useEffect get function after page loads
import React from 'react';
import './ViewAll.scss';
import happyPlush from '../assets/images/products/happyPlush.jpg';
import fannyPack from '../assets/images/products/fannyPack.jpg';

const ViewAll = () => {
    return (
        <div>
            <h1>View All</h1>
            <img src={happyPlush} />
            <img src={fannyPack} />
        </div>
    )
};

export default ViewAll;