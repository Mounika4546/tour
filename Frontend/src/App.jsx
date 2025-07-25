import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Aboutus from './components/pages/Aboutus';
import Book from './components/pages/book';
import ContactUs from './components/pages/ContactUs';
import SpecialOffers from './components/pages/Specialoffers';
import Tours from './components/pages/Tours';
import Login from './components/pages/login';
import Register from './components/pages/Register';
import FeaturedTourPlans from './components/FeaturedTourPlans';
import Experience from './components/Experience';
import Gallery from './components/Gallery';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Managing login state

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} /> {/* Pass isLoggedIn to Home */}
        <Route path="/about" element={<Aboutus />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/specialoffers" element={<SpecialOffers />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/featured" element={<FeaturedTourPlans />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/gallery" element={<Gallery />} />
        // inside 
  {/* Other routes */}



      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



