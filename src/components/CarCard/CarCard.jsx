import React from "react";
import "./CarCard.css";

// Pass a suggested car or "best match" car
function CarCard({ image, make, car_model, price, colour, body_type, url }) {
  return (
    <div className="car-card">
      <img alt="" src={image} />
      <h3>This your best match car</h3>
      <h3>Car make: {make}</h3>
      <h3>Car model: {car_model}</h3>
      <h3>Car price: $ {price}</h3>
      <h3>Car color: {colour}</h3>
      <h3>Car body type: {body_type}</h3>
      <h3>More car details here: {url}</h3>
    </div>
  );
}

export default CarCard;
