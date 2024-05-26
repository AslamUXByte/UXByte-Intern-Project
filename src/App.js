
import './App.css';
import Signup from './components/Authentication/Signup';
import Signin from './components/Authentication/Signin';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './components/Homecomponents/Home';
import React from 'react';
import Landing from './components/Landingpage/Landing';
import Product from './components/Prdtpage/Product';
function App() {

  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Signin/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/home' element={<Home />} />  
          <Route path='/Landing' element={<Landing />} /> 
          <Route path='/product' element={<Product />} /> 

    
          </Routes>
      
    </BrowserRouter>
  );
}

export default App;