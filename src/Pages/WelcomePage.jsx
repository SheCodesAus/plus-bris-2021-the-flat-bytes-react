import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();
  const redirectToLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <div id="img-div">
        <img id="banner" src={"../Luxe-logo-banner.png"} alt="" />
      </div>
      <div class="standard-text">
        <p>Welcome,</p>
        <p>Let us help you with your next purchase</p>
      </div>
      <div class="login" style={{ textDecoration: "none" }}>
        <button onClick={redirectToLogin}>ENTER</button>
      </div>
    </div>
  );
}

export default WelcomePage;
