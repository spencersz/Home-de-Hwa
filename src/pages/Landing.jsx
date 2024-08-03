import './Landing.scss';
import React from 'react';
import MainContainer from '../containers/MainContainer.jsx';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();

    const handleViewAllClick = () => {
        navigate('/viewall');
    };

    return(
        <div id='Landing'>
            <MainContainer />
            <button onClick={handleViewAllClick}>View All</button>
        </div>
    )
};

export default Landing;