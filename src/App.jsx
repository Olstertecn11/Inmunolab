import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import Nav from './components/widgets/Nav';
import Footer from './components/widgets/Footer';
import Questions from './components/sections/Questions';
import UpButton from './components/widgets/UpButton';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' exec element={<Home />} />
        <Route path='/About' exec element={<About />} />
        <Route path='/Services' exec element={<Services />} />
        <Route path='/Contact' exec element={<Contact />} />
        <Route path='/Preguntas' exec element={<Questions />} />
      </Routes>
      <UpButton />
      <Footer />
    </div>
  );
}


export default App
