import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import ViewAll from './pages/ViewAll.jsx';
import NotFound from './pages/NotFound.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Landing />} />
        <Route path='/viewall' element = {<ViewAll />} />
        <Route path='*' element = {<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

/*
Home De Hwa
  |-dist
    |-bundle.js 
  |-node_modules
  |-src
    |-App.jsx
    |-index.html
    |-index.js
    |-assets
      |-fonts
      |-images
        |-products
      |-logo
    |-components
      |-ImageCarousel
      |-MenuItem
      |-NavBar
    |-containers
      |-MainContainer
      |-HeaderContainer
      |-MenuContainer
      |-ApparelContainer
      |-PlushyContainer
    |-pages
      |-Landing
      |-ViewAll
  |-package.json
  |-webpack.config.js 
*/