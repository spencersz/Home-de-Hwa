//headercontainer  > container

//image carousel  > component

//menu container  > container 

import React from 'react';
import HeaderContainer from './HeaderContainer.jsx';
import ImageCarousel from '../components/ImageCarousel.jsx';
import MenuContainer from './MenuContainer.jsx';

const MainContainer = () => {
    return(
        <div>
            <h1>Panda Store</h1>
            <div id="HeadContainer">
                <HeaderContainer />
            </div>
            <div id="ImageCarousel">
                <ImageCarousel />
            </div>
            <div id="MenuContainer">
                <MenuContainer />
            </div>
        </div>
    );
};

export default MainContainer;