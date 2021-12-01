import React, { useEffect, useState } from "react";
import "./Profile.css";
import UpdateUser from "../UpdateUser/UpdateUser";
import { Link, useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const EditAccount = () => {
    navigate("/edit-account");
  };

  const addCar = () => {
    navigate("/home");
  };
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users/${id}`)
      .then((results) => {
        console.log("results", results);
        return results.json();
      })
      .then((data) => {
        setUserData(data);
      });
  });

  const Logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const DeleteUser = async () => {
    fetch(`${process.env.REACT_APP_API_URL}users/${id}`, {
      method: "delete",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    });
    navigate("/");
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
          You are currently Logged in. Would you like to{" "}
          <a
            class="standard-text"
            style={{
              fontWeight: "bold",
              marginTop: "1%",
            }}
            href="#"
            onClick={Logout}
          >
            Logout?
          </a>
          Otherwise, Delete or Update your account here:
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
          <button type="submit" onClick={EditAccount}>
            Update Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
