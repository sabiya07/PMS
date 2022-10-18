import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import { Body } from './components/Body.js';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Header/>
      <Navbar />
       
      <Routes>

        <Route path="/" element={<Body />} />
        <Route path='/Signup' elements={<Signup 
        alert={alert}
        />} />
        <Route path='/login' element={<Login
        alert={alert}
        // showAlert={showAlert}
         />} />

      </Routes> 
       <Footer />

    </>

  );
}

export default App;
