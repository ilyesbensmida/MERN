// import './App.css';
// import {Router} from '@reach/router';
// import Home from './components/Home';
// import Word from './components/Word';
// import Validator from './components/Validator';
// import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Word from './components/Word';
import Validator from './components/Validator';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/validator/:input?" element={<Validator />} />  {/* Handles both paths */}
        <Route path="/word/:word/:color1/:color2" element={<Word />} />
      </Routes>
    </div>
  );
}

export default App;