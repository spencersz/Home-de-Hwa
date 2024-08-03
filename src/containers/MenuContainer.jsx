// apparel container 

// plushy container

//stationery container

//misc container 

import React, { useState, useEffect} from 'react';
import PlushyContainer from './PlushyContainer.jsx';
import ApparelContainer from './ApparelContainer.jsx';

const MenuContainer = () => {
    const [products, setProducts] = useState([]); //products is array of obj
 
    useEffect(() => {
        const fetchData = async () => {
            console.log('fetchData has run');
            try{
                const result = await fetch('/api/products');
                console.log(result);
                const data = await result.json();
                console.log('fetched data: ', data);
                setProducts(data);
            } catch (err) {
                console.log('Erorr fetching data: ', err);
            }
        }
        fetchData();
    }, []);
    
    return(
        <div>
            <h2>Menu Container</h2>
            <PlushyContainer />
            <ApparelContainer />
        </div>
    );
};

export default MenuContainer;


   /*  products will be an array like example as so:
        [ {
        id: Number
        name: 'string'
        price: Number
        quantity: Number
        is_plush: bool
        }]
    */