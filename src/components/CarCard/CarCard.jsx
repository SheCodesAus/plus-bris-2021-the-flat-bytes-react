import React from "react";
import "./CarCard.css";
import { useNavigate } from "react-router-dom";

// Pass a suggested car or "best match" car
function CarCard({ image, make, car_model, price, colour, body_type, url }) {
  const navigate = useNavigate();

  const saveFavourite = () => {
    navigate("/profile");
  };

  return (
    <div className="car-card">
      <img alt="" src={image} />
      <div class="car-details">
      <ul>
      <h3>{make} - {car_model}</h3>
      <li><b>Price</b>$ {price}</li>
      <li><b>Color</b>{colour}</li>
      <li><b>Body Type</b>{body_type}</li>
      </ul>
      <li><h4>Additional Details:<br /> {" "}
        <a href={url} target="_blank">
          {" "}
          Open in new window
        </a><br /></h4></li></div>
      <div>
        <button type="submit" onClick={saveFavourite}>
          Save Favourite
        </button>
      </div>
    </div>
  );
}

export default CarCard;
