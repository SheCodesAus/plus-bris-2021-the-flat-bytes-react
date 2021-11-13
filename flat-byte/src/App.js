import React from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./Pages/HomePage";
import CarDetailPage from "./Pages/CarDetailPage";
import "./App.css";


function App() {
  return (
  <Router>
    <div>
      <Nav />
      
      <Routes>
        <Route path="/car-detail" element={<CarDetailPage/>} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;