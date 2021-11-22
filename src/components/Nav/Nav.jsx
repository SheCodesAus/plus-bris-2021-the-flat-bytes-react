import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";


function Nav() {
  return (
    <nav className="nav_component">
      <li><Link to="/home">Home</Link></li>
      {/* <li style="float:right;text-align:right"><Link to="/car-detail">Account</Link></li> */}
    </nav>
  );
}

export default Nav;
