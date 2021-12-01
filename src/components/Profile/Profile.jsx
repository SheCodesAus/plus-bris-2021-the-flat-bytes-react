import React, {useState} from "react";
import "./Profile.css";
import UpdateUser from "../UpdateUser/UpdateUser";
import { useNavigate } from "react-router-dom";
import DeleteUser from "../DeleteUser/DeleteUser";

const Profile = () => {
  const navigate = useNavigate();

  const addCar = () => {
    navigate("/home");
  };

  return (
    <div>
      <div>
        <h3 class="standard-text">Welcome to your page.</h3>
        <h3 class="standard-text">
          These are your favourites from our selection tailored just for you...
        </h3>
        {/* {}
        <div>
          <CarCard></CarCard>
        </div> */}
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
    </div>
  );
};

export default Profile;
