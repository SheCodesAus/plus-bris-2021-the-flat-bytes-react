import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import IconLogo from "../../assets/Luxe_Icon.png";
import IconHome from "../../assets/Luxe_Home.png";
import IconUser from "../../assets/Luxe_User.png";

function Nav() {
  return (
    <nav class="nav_component">
      <ul>
        <Link to="/home">
          <img src={IconHome} alt="" />
        </Link>
      </ul>
      <ul>
        <img src={IconLogo} alt="" />
      </ul>
      <ul>
        <Link to="/profile">
          <img src={IconUser} alt="" />
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
