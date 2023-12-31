import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
      <Routes>
      <Route path="/" element={<News pSize={9}/>} />
      <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
      </div>
    )
  }
}

