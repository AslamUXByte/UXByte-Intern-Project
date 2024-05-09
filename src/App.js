
import './App.css';
import Signup from './components/Authentication/Signup';
import Signin from './components/Authentication/Signin';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './components/Homecomponents/Home';
import React from 'react';
import Landing from './components/Landingpage/Landing';
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route path='/signin' element={<Signin/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/home' element={<Home />} />  
          <Route path='/Landing' element={<Landing />} />  
    
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;