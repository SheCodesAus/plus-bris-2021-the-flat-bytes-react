import React, { useState, useEffect } from "react";
import "./CarCard.css";
import { useNavigate } from "react-router-dom";

import Profile from "../Profile/Profile.jsx";

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
  const [favourite, setFavourite] = useState({
    owner : "",
    product_id : id
  });
  
  

  const handleSumbit = (e) => {
    e.preventDefault()
    saveFavourite()
      .then((response) => { 
      setFavourite(response)
      // const reco = localStorage.setItem("reco", id)
      console.log("response :", response)
    }
  )
}

  const saveFavourite = async () => {
    const token = window.localStorage.getItem("token");
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}recommendations/`,
      {
        method: "post",
        headers: {
          "Authorization": `Token ${token}`,
          'Accept': 'application/json',
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          owner: favourite.owner,
          product_id: favourite.product_id,
        }),
      }
    );
    //navigate("/profile");
    setFavourite(response);
    console.log("This is setFavourite", setFavourite)
    return response.json();
    
  };

  return (
    <div className="car-card">
      {/* {favourite && <Profile props={saveFavourite} />} */}
      <img alt="" src={image} />
      <div class="car-details">

     <ul><h3>{make} - {car_model}</h3></ul>
      <ul>
      <li><b>Price</b>$ {price}.000</li>
      <li><b>Color</b>{colour}</li>
      <li><b>Body Type</b>{body_type}</li>
      
      <li><b>Additional Details:</b>{" "}
         <a href={url} rel="noreferrer" target="_blank">

          {" "}
          Open in new window
        </a><br /></li></ul>
        
        </div>
      <div>

      <div>
          <button type="submit" onClick={handleSumbit}>

          Save Favourite
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default CarCard;
