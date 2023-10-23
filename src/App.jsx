import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import Nav from './components/widgets/Nav';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' exec element={<Home />} />
        <Route path='/About' exec element={<About />} />
        <Route path='/Services' exec element={<Services />} />
        <Route path='/Contact' exec element={<Contact />} />
      </Routes>
    </div>
  );
}


export default App
