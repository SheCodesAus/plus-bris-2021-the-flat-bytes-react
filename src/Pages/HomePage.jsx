import React, { useState, useEffect } from "react";
import allProjects from "../data";
import CarCard from "../components/CarCard/CarCard";

function HomePage() {
  return (
    <div id="car-list">
      {allProjects.map((projectData, key) => {
        return <CarCard key={key} projectData={projectData} />;
      })}
    </div>
  );
}

export default HomePage;
