
import './App.css';
import Signup from './components/Authentication/Signup';
import Signin from './components/Authentication/Signin';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './components/Homecomponents/Home';
import Navbar from './components/Navbar';
import React from 'react'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<Home/>}/> 
    </Routes>
    </div>
    
    </BrowserRouter>
    
  );
}

export default App;
