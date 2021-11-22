import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import IconLogo from "../../assets/Luxe_Icon.png"
import IconHome from "../../assets/Luxe_Home.png"
import IconUser from "../../assets/Luxe_User.png"
function Nav() {
  return (
    <nav className="nav_component">
      <li><Link to="/home"><img src={IconHome} alt="" /></Link></li>
      <li><img src={IconLogo} alt="" /></li>
      <li><Link to="/home"><img src={IconUser} alt="" /></Link></li>
    </nav>
  );
}

export default Nav;
