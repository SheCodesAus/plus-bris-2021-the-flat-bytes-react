import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

function SignUpPage() {
  return (
    <div>
      <h1 class="luxe">Luxe</h1>
      <form class="container">
        <h3>Sign-up</h3>
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
            type="text"
            id="username"
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
            placeholder="Choose Password"
            // onChange={handleChange} -> create this function when APIs linked
          />
        </div>
      </form>
      <div class="container" style={{ marginTop: "5%" }}>
        <button>
          <Link to="/home">Signup</Link>
        </button>
      </div>
    </div>
  );
}

export default SignUpPage;
