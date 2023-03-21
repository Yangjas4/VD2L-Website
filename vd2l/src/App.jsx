import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing';
import About from './Pages/About';
import Season from './Pages/Season';
import Signup from './Pages/Signup';
import Rules from './Pages/Rules';
import Admin from './Pages/Admin';
import SignupDone from './Pages/SignupDone'

function App() {

  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/season" element={<Season />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/signupDone" element={<SignupDone />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
