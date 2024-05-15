import React from 'react';
import './App.css';
import Header from './header';
import Home from './home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Info from './pages/info'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/info' element={<Info />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
