import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Pages/Home/Home'
import AudioBooks from './Pages/AudioBooks/AudioBooks'

const routes = (
  <Router>
    <Routes>
      <Route path="" exact element = {<Home />} />
      <Route path="/audiobooks" element = {<AudioBooks />} />
    </Routes>
  </Router>
);

const App = () => {
  return (
    <div>{routes}</div>
  )
};

export default App;

