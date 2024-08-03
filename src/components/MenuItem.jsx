/**
 * ************************************
 *
 * @module  MenuItem
 * @author
 * @date
 * @description presentation component that renders a single box for each menu item
 *
 * ************************************
 */

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