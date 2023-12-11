"use client"

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Setting from './pages/Setting';
import Signup from './pages/Signup';
import Signin from './pages/signin';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/Signin" element={<Signin/>}/>
          <Route path='/Signup' element={<Signup/>}/>
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
