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
      <div class="car-details">
      <ul>
      <h3>{make} - {car_model}</h3>
      <li><b>Price</b>$ {price}</li>
      <li><b>Color</b>{colour}</li>
      <li><b>Body Type</b>{body_type}</li>
      </ul>
      <li><h4>Additional Details:<br /> {" "}
        <a href={url} target="_blank">
          {" "}
          Open in new window
        </a><br /></h4></li></div>
      <div>
        <button type="submit" onClick={saveFavourite}>
          Save Favourite
        </button>
      </div>
    </div>
  );
}

export default CarCard;
