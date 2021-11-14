import React from "react";
import { useHistory, Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div>
      <h1 class="luxe">Luxe</h1>
      <div id="welcome">
        <p>Welcome,</p>
        <p>Let us help you with your next purchase</p>
      </div>
      <div class="login" style={{ textDecoration: "none" }}>
        <button>
          <Link to="/login">Login</Link>
          {/* Not sure how to remove underline from link */}
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
