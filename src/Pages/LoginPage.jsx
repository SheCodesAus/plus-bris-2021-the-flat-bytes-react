import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

function LoginPage() {
  return (
    <div>
      <h1 class="luxe">Luxe</h1>
      <form class="container">
        <h3>Login</h3>
        <div>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            // onChange={handleChange} -> create this function when APIs linked
          />
        </div>
        <div class="form-field">
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            // onChange={handleChange} -> create this function when APIs linked
          />
        </div>
      </form>
      <div class="container" style={{ marginTop: "5%" }}>
        <button>
          <Link to="/login" class="login">
            Login
          </Link>
        </button>
        <p style={{ color: "white" }}>or</p>
        <button>
          <Link to="/signup">Signup</Link>
        </button>
      </div>
    </div>
  );
}

export default LoginPage;