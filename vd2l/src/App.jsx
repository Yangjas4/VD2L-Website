import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing';
import About from './Pages/About';
import Season from './Pages/Season';
import Inhouse from './Pages/Inhouse';
import Rules from './Pages/Rules';

function App() {

  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/season" element={<Season />} />
            <Route path="/inhouse" element={<Inhouse />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
