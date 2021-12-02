import React, { useState, useEffect } from "react";
import "./Profile.css";
import UpdateUser from "../UpdateUser/UpdateUser";
import { useNavigate, useParams, } from "react-router-dom";
import DeleteUser from "../DeleteUser/DeleteUser";
import CarCard from "../CarCard/CarCard";

const Profile = () => {
  const navigate = useNavigate();
  const [savedRecs, setSavedRecs] = useState([]);
  // const [user, setUser] = useState({
  //   user_id: id,
  //   username: "",
	// 	email: "",
  //   password: ""
  // })
  const [user, setUser] = useState()
  const [userData, setUserData] = useState()
   

const addCar = () => {
    navigate("/home");
  };

  const { id } = useParams();

  console.log("User id is", id)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users/${id}/`)
    .then((results) => {
      console.log("my results", results)
      return results.json();
    })
    .then((data) => {
      console.log("data", data);
      setUser(data)
      //setSavedRecs(data);
    });
  }, [id]);

  // const getUserProfile = () => {

  // }

    // then once you have done the GET request on the profile page
  // savedrecommendations.map((recommendation) => {
  // return (<div>
  //   <div>car make: {recommendation.make}</div>
  // blah blah other properties...
  // </div>)
  // })

  return (
    <div>
      <div>
        <h3 class="standard-text">Welcome to your page</h3>
        {/* <h3>{user.id}</h3> */}
        <h3 class="standard-text">
          These are your favourites from our selection tailored just for you...
        </h3>
      </div>
      <div className="car-list">
          {savedRecs.map((owner, key) => {
            return <CarCard key={key} owner={owner} />
          })}
        </div>
        <div>
         {/* saved cars to be displayed here */}
        </div>
        <button
          onClick={addCar}
          class="container"
          style={{ marginBottom: "2%" }}
        >
          Find more cars...
        </button>
        <h3 class="standard-text"> More to love:</h3>
        <div class="container">
          <button class="profile-button"> Jewellery </button>
          <button class="profile-button"> Holiday Homes </button>
          <button class="profile-button"> Yachts </button>
          <button class="profile-button"> Private Jets </button>
        </div>
        <h3 class="standard-text" style={{ marginTop: "5%" }}>
          You are currently Logged in. Delete or Update your account here:
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "5%",
          }}
        >
          <button type="submit" onClick={DeleteUser}>
            Delete Account
          </button>
          <button type="submit" onClick={UpdateUser}>
            Update Account
          </button>
        </div>
      </div>
  );
};

export default Profile;
