import React from 'react';
// import MenuItem from '../components/MenuItem.jsx';
import image from '../assets/images/products/happyPlush.jpg';

const PlushyContainer = () => {
    return(
        <div>
            <h3>Plushy Container</h3>
            <img src= {image} />
        </div>
    );
};

export default PlushyContainer;


/*
import React from 'react';
import image from '../assets/images/products/fannyPack.jpg';


const MenuItem = () => {
    return (
        <div className="menuItem">
            <p>Menu Item</p>
            <img src = {image} alt='image' />
        </div>
    );
};

export default MenuItem;
*/