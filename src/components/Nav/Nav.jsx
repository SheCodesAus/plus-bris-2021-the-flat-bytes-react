import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";


function Nav() {
  return (
    <nav className="nav_component">
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/car-detail">Link2</Link></li>
    </nav>
  );
}

export default Nav;
