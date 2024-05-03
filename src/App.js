
import './App.css';
import Signup from './components/Authentication/Signup';
import Signin from './components/Authentication/Signin';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    
    
    </BrowserRouter>
    
  );
}

export default App;
