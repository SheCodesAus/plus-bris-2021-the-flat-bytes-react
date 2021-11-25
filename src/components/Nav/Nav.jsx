import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/car-detail">Car Details</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default Nav;
