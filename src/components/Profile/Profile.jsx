import React from "react";
import "./Profile.css";
import Form from "../Form/Form";

const initialPreferences = [];

const Profile = () => {
  const [Preferences, setPreferences] = React.useState(initialPreferences);
  const [name, setName] = React.useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    const updatedPreferences = Preferences.concat({ name });

    setPreferences(updatedPreferences);
  }

  return (
    <div>
      <div>
        {/*/<div>
           <input type="text" value={name} onChange={handleChange} />
          <button type="button" onClick={handleAdd}>
            Add
          </button>
          <div>{Preferences}</div>
        </div>
      </div>
      <ul>
        {Preferences.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}

        <h3 class="standard-text">Welcome to your page.</h3>
        <h3 class="standard-text">
          These are your favourites from our selection tailored just for you...
        </h3>
        <h3 class="standard-text"> More to love:</h3>
        <div class="container">
          <button class="profile-button"> Jewellery </button>
          <button class="profile-button"> Holiday Homes </button>
          <button class="profile-button"> Yachts </button>
          <button class="profile-button"> Private Jets </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
