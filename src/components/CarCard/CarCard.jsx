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
      
      <h3>Make: {make}</h3>
      <h3>Model: {car_model}</h3>
      <h3>Price: $ {price.toFixed(3)}</h3>
      <h3>Color: {colour}</h3>
      <h3>Body Type: {body_type}</h3>
      <h3>More details here:  <a href={url} target="_blank"> Car details</a></h3>


    <br/>
    <br/>
    <br/>
    <br/>
    </div>
  );
}

export default CarCard;
