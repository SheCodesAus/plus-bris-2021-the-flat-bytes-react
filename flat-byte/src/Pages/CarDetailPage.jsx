import React from "react";
import { oneProject } from "../data";

function CarDetailPage() {
  return (
    <div>
      <h2>{oneProject.title}</h2>
      <h3>Created at: {oneProject.date_created}</h3>
      <h3>{`Status: ${oneProject.is_open}`}</h3>
    </div>
  );
}

export default CarDetailPage;
