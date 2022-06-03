import React from "react";
import { BrowserRouter as Router,
  Routes, Route
 } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Products  from "./components/pages/Products";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
