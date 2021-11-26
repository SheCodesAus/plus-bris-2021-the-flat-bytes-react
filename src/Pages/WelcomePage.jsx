import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();
  const redirectToLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <div class="standard-text">
        <p>Welcome to Luxe,</p>
        <p>your AI shopping assistant.</p><br/>
        <p>Let our algorithm guide you<br/>in your next purchase. </p>
      </div>
      <div class="button">
        <button onClick={redirectToLogin}>ENTER</button>
      </div>
    </div>
  );
}

export default WelcomePage;
