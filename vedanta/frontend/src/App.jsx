import React from "react";
import {  Routes, Route,  } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Program from "./components/Programs/Program";
import About from "./components/About/About";
import Contact from './components/Contact/Contact'
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/programs" element={<Program/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
