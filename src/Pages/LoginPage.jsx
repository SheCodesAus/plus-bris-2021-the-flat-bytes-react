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

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
 
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
    console.log(credentials);
  };

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}api-token-auth/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        window.localStorage.setItem("token", response.token);
        
        console.log(response);
      });
    }
  };
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
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
      </form>
      <div class="button-container container">
      <button onClick={handleSubmit}>LOGIN</button>
        <p>or</p>
        <button >SIGN UP</button>
      {/* <button onClick={doLogin}>LOGIN</button>
        <p>or</p>
        <button onClick={signUp}>SIGN UP</button> */}
      </div>
    </div>
  );
}

export default LoginPage;
