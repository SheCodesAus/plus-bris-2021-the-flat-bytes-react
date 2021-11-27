import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import IconLogo from "../../assets/Luxe_Icon.png";
// import Nav from "./components/Nav/Nav";

function Header() {
    const [authenticated,setAuthenticated]=useState()
    return(
        <Link className="header" to="/">
            <img id="headerlogo" src={IconLogo} alt="logo" />
            <h1 class="neon">L U X E</h1>
        </Link>
    );
}

export default Header;