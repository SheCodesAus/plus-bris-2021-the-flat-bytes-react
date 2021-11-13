import React from "react";
import { Link } from "react-router-dom";
import "./CarCard.css";

function CarCard(props) {
  const { projectData } = props;
  return (
    <div className="car-card">
      <Link to="/project">
        <img src={projectData.image} />
        <h3>{projectData.title}</h3>
      </Link>
    </div>
  );
}

export default CarCard;
