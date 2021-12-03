import React, { useState, useEffect } from "react";
import Profile from "../components/Profile/Profile";

function ProfilePage() {
  const [savedRecs, setSavedRecs] = useState([]);

  const getFavourite = (props) => {
    console.log("Props are----", props)
    fetch(`${process.env.REACT_APP_API_URL}recommendations/`)
    .then((results) => {
      console.log("Recommendations------", results)
      
      return results.json();
    })
    .then((data) => {
      console.log("These are data/recommendations---", data);
      setSavedRecs(data)
      
    });
  }

  useEffect(() => {
   getFavourite()
  }, []);
  return (
    <div>
      <div>
        <Profile />
     
        <h3 class="standard-text">Welcome to your page</h3>
          <div className="car-list">
          {savedRecs.length > 0 && 
          savedRecs.map((rec) => {
            return (
              <div className="car-list">
               <li class="standard-text">id: {rec.id}</li>
               <li class="standard-text">product_id: {rec.product_id}</li>
            </div>
            )
          })}
        </div>

      </div>
    </div>
  );
}

export default ProfilePage;
