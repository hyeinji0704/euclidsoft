import React from 'react';
import './App.css';
import Header from './header';
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Worklist from './pages/worklist'
import Workboard from './pages/workboard';
import Login from './login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/workboard" element={ <Workboard /> } />
          <Route exact path="/worklist" element={ <Worklist /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
