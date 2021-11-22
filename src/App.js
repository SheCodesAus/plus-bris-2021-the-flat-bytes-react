import React, {useState} from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./Pages/HomePage";
import CarDetailPage from "./Pages/CarDetailPage";
import "./App.css";
import WelcomePage from "./Pages/WelcomePage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUp";


function App() {
  const [authenticated,setAuthenticated]=useState(true)
  return (
  <Router>
    <div id="background">
   {/* <Nav />  #need to place this so it only shows after user login */}
      <Routes>
        <Route path="/" element={<WelcomePage/>} />
        <Route path="/car-detail" element={<CarDetailPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
   {authenticated && <Nav />}
   

  </Router>
  );
}

export default App;