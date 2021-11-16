import React from "react";
import { oneProject } from "../data";

function CarDetailPage() {
  return (
    <div>
      <h2>{oneProject.title}</h2>
      <h3>Created at: {oneProject.date_created}</h3>
      <h3>{`Status: ${oneProject.is_open}`}</h3>
      <h3>Ratings</h3>
      <ul>
        {oneProject.ratings.map((ratingData, key) => {
          return (
            <li>
              {ratingData.supporter} gave a rating of {ratingData.rating}.{" "}
              {ratingData.supporter} comment: "{ratingData.comment}"
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CarDetailPage;
