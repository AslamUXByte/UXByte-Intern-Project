
import './App.css';
import Signup from './components/Authentication/Signup';
import Signin from './components/Authentication/Signin';
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/Signup' element={<Signup/>}/>
    </Routes>
    
    
    </BrowserRouter>
    
  );
}

export default App;
