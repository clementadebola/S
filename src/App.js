import React from 'react'
import Header from './component/Header';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from "react-router-dom";

import Hero from './component/Hero';
import About from './component/About';
import Portal from './component/Portal';
import Services from './component/Services';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Header />}>
      <Route index element={<Hero/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="/portal" element={<Portal />}/>
      <Route path="/services" element={<Services />}/>
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App