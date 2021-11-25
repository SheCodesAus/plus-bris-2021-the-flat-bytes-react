import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate
  const goHome = () => {
    navigate("/home")
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
            id="name"
            placeholder="Name"
            // onChange={handleChange} -> create this function when APIs linked
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            placeholder="Email"
            // onChange={handleChange} -> create this function when APIs linked
          />
        </div>
        <div>
          <input
            type="text"
            id="username"
            placeholder="Username"
            // onChange={handleChange} -> create this function when APIs linked
          />
        </div>
        <div class="form-field">
          <label htmlFor="Password"></label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            // onChange={handleChange} -> create this function when APIs linked
          />
        </div>
      </form>
      <div class="container submit-container">
      <button onClick={goHome}>SIGNUP</button>
      </div>
    </div>
  );
}

export default SignUpPage;
