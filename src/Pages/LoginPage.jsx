import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const doLogin = () => {
    navigate("/home")
  }
  const signUp = () => {
    navigate("/signup")
  }
  return (
    <div>
      <div id="img-div">
        <img id="banner" src={"../Luxe-logo-banner.png"} alt="" />
      </div>
      <form class="container">
        <div>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            // onChange={handleChange} -> create this function when APIs linked
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            // onChange={handleChange} -> create this function when APIs linked
          />
        </div>
      </form>
      <div class="button-container container">
      <button onClick={doLogin}>LOGIN</button>
        <p>or</p>
        <button onClick={signUp}>SIGN UP</button>
      </div>
    </div>
  );
}

export default LoginPage;
