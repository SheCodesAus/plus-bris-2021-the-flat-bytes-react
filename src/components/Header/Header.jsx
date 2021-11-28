import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import IconLogo from "../../assets/Luxe_Icon.png";
import Nav from "../Nav/Nav";

function Header() {
   
    return(
        <><section>
            <section id="header">
            <Link className="header" to="/">
                    <ul><img id="headerlogo" src={IconLogo} alt="logo" /></ul>
                   <ul><h1 class="neon">L U X E</h1></ul>
            </Link>
            </section>
        
            <section>
            <Nav />
            </section>
        </section></>

    );
}

export default Header;