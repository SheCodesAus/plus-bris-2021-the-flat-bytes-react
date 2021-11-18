import React from "react";
import "./CarCard.css";

function CarCard(props) {
  const { ...suggestedCar } = props;
  return (
    <div className="car-card">
      <img alt="" src={suggestedCar.image} />
      <h3>This your best choice carcard</h3>
      <h3>Car make: {suggestedCar.make}</h3>
      <h3>Car model: {suggestedCar.model}</h3>
      <h3>Car price: $ {suggestedCar.price}</h3>
      <h3>Car price: {suggestedCar.colour}</h3>
      <h3>See more car details here: {suggestedCar.url}</h3>
    </div>
  );
}

export default CarCard;
