import React from 'react';
import './App.css';
import Header from './header';
import Header_Active from './header';
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Worklist from './pages/worklist'
import Workboard from './pages/workboard';
import { useState } from "react";
import Login from './login';

function App() {
  return (
    //<Login />
    <BrowserRouter>
      <div className="App">
        <Header_Active />
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/workboard" element={ <Workboard /> } />
          <Route path="/worklist" element={ <Worklist /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
