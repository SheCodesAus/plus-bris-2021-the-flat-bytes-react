import React from "react";
import { useNavigate, Link } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();
  const redirectToLogin = () => {
    navigate('/login')
  }
  return (
    <div>
      <div id="img-div">
      <img id="banner" src={"../Luxe-logo-banner.png"} alt=""/>
      </div>
      <div id="welcome">
        <p>Welcome,</p>
        <p>Let us help you with your next purchase</p>
      </div>
      <div class="login" style={{ textDecoration: "none" }}>
        <button onClick={redirectToLogin}>ENTER</button>
          {/* Not sure how to remove underline from link */}
      </div>
    </div>
  );
}

export default WelcomePage;
