import React, { useState, useEffect } from "react";
import "./Profile.css";
import UpdateUser from "../UpdateUser/UpdateUser";
import { useNavigate, useParams } from "react-router-dom";
import DeleteUser from "../DeleteUser/DeleteUser";
import CarCard from "../CarCard/CarCard";

const Profile = (props) => {
  const [token, setToken] = useState(localStorage.getItem('token'))

  const { id } = useParams();
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    id: {id},
    email: "",
    username: ""
  });
  const doLogout = () => {
    localStorage.setItem('token', null)
    navigate('/')
    setToken(null)
  }

  console.log ("User id", id)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users/${id}/`)
    .then((results) => {
      console.log ("User id2", id)
        return results.json();
    })
    .then((data) => {
      console.log ("User id3", id)
        setUserData(data);
        console.log("This is user data", data)
    });
    
}, [id]);
console.log ("User id", id)

  
  return (
    <div>
      <div>
        <h3 class="standard-text">Welcome to your page</h3>
        <h3 class="standard-text">Your username is: {userData.username}</h3>
        <h3 class="standard-text">Your email is: {userData.email}</h3>
        
        <h3 class="standard-text">
          These are your favourites from our selection tailored just for you...
        </h3>
      </div>
      {/* <div className="car-list">
          {savedRecs.map((owner, key) => {
            return <CarCard key={key} owner={owner}/>
          })}
        </div> */}
        <div>
         {/* saved cars to be displayed here */}
        </div>
        <button
          // onClick={addCar}
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
          You are currently Logged in. <br/>
        
          <button className="logout-button" onClick={doLogout}>Logout</button> <br/>
          Delete or Update your account here:
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
