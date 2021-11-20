import React from "react";
import "./CarCard.css";

// Pass a suggested car or "best match" car
function CarCard({ image, make, model, price, colour, url}) {
  console.log('car card:', image, make, model, price, colour, url)
  return (
    <div className="car-card">
      <img alt="" src={image} />
      <h3>This your best choice carcard</h3>
      <h3>Car make: {<h3>Car make: {make}</h3>}</h3>
      <h3>Car model: {model}</h3>
      <h3>Car price: $ {price}</h3>
      <h3>Car price: {colour}</h3>
      <h3>See more car details here: {url}</h3>
    </div>
  );
}

export default CarCard;
