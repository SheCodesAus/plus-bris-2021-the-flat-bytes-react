import React from "react";
import "./CarCard.css";

// Pass a suggested car or "best match" car
function CarCard({ image, make, car_model, price, colour, body_type, url}) {
  
  return (
    <div className="car-card">
      <img alt="" src={image} />
      
      <h3>Make: {make}</h3>
      <h3>Model: {car_model}</h3>
      <h3>Price: $ {price}</h3>
      <h3>Color: {colour}</h3>
      <h3>Body type: {body_type}</h3>
      <h3>More details here:  <a href={url} target="_blank">car details</a></h3>
    </div>
  );
}

export default CarCard;
