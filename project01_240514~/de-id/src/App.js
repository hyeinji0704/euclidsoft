import React from 'react';
import './App.css';
import Header from './header';
import Home from './home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Worklist from './pages/worklist'
import Workboard from './pages/workboard';
import Login from './login';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Home />
      <Routes>
        <Route path='/worklist' element={<Worklist />} />
        <Route path='/workboard' element={<Workboard />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
