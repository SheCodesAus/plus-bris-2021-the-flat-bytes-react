import React, { useState, useEffect } from "react";
import "./CarCard.css";
import { useNavigate } from "react-router-dom";

// Pass a suggested car or "best match" car
function CarCard({
  id,
  image,
  make,
  car_model,
  price,
  colour,
  body_type,
  url,
}) {
  const navigate = useNavigate();

  const saveFavourite = async () => {
    console.log("id: ", id);

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}recommendations/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        // body: JSON.stringify(credentials),
        // above was for the login form
        // below are examples of what might work for this post request
        // body: JSON.stringify(id),
        body: JSON.stringify({
          product_id: id,
        }),
      }
    );
    console.log("response: ", response);
    return response.json();
    navigate("/profile");
  };

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log("data", data);
        setUserList(data);
      });
  }, []);

  // then once you have done the GET request on the profile page
  // savedrecommendations.map((recommendation) => {
  // return (<div>
  //   <div>car make: {recommendation.make}</div>
  // blah blah other properties...
  // </div>)
  // })

  return (
    <div className="car-card">
      <img alt="" src={image} />

      <h3>Make: {make}</h3>
      <h3>Model: {car_model}</h3>
      <h3>Price: $ {price}</h3>
      <h3>Color: {colour}</h3>
      <h3>Body Type: {body_type}</h3>
      <h3>
        More details here:{" "}
        <a href={url} target="_blank">
          {" "}
          Car details
        </a>
      </h3>
      <div>
        <button type="submit" onClick={saveFavourite}>
          Save Favourite
        </button>
      </div>
    </div>
  );
}

export default CarCard;
