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
    navigate("/profile");
    return response.json();
    
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
        <a href={url} rel="noreferrer" target="_blank">
          {" "}
          Car details
        </a>
      </h3>
      <div>
      {/* if car is saved, display this button */}
      {/* {/* { !window.localStorage.getItem("reco") || window.localStorage.getItem("reco")!== id
      //  */}
      <div>
          <button type="submit" onClick={handleSumbit}>
          Save Favourite
          </button>
        </div>
      {/* :<div>Saved to Favourites</div>
      }    */}
      </div>
      
    </div>
  );
}

export default CarCard;
