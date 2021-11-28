import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import IconLogo from "../../assets/Luxe_Icon.png";
import Nav from "../Nav/Nav";

function Header() {
   
    return(
        <><section>
            <Nav />
        </section>

        <section>
            <Link className="header" to="/">
                    <img id="headerlogo" src={IconLogo} alt="logo" />
                    <h1 class="neon">L U X E</h1>
            </Link>
        </section></>
    );
}

export default Header;