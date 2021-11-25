import React from "react";
import "./Profile.css";

function Profile() {
  const favourites = (e) => {};

  return (
    <div>
      <div id="img-div">
        <img id="banner" src={"../Luxe-logo-banner.png"} alt="" />
      </div>
      <div>
        <p></p>
      </div>
      <button onClick={favourites}>Cars</button>
      <button>Jewellery</button>
      <button>Holiday Homes</button>
    </div>
  );
}

export default Profile;
