import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate
  const goHome = () => {
    navigate("/home")
  }

  const initialDetails = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: ""
  }

  const [userDetails, setUserDetails] = useState(initialDetails);
  const handleChange = (event) => {
    const { id, value } = event.target;
    setUserDetails((prevUserDetails) => {
      return {
        ...prevUserDetails,
        [id]: value,
      }
    });
    console.log(userDetails)
  }
 
  const postData = async() => {

    
    setUserDetails(initialDetails)
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}users/`, 
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails)
      }
    );
    
    return response.json();
  }

  const handleSubmit = (e) => {
    console.log("Trying to submit")
    e.preventDefault();
    postData().then((response) => {
      
      console.log("Response from API------", response)
    });
    
  };

  return (
    <div>
      <div id="img-div">
        <img id="banner" src={"../Luxe-logo-banner.png"} alt="" />
      </div>
      <form class="container">
      <div class="form-field">
          <label htmlFor="First name"></label>
          <input
            type="text"
            id="first_name"
            placeholder="First name"
            onChange={handleChange}
          />
        </div>
        <div class="form-field">
        
          <input
            type="text"
            id="last_name"
            placeholder="Last name"
            onChange={handleChange}
          />
        </div>
        
        <div class="form-field">
        
          <input
            type="text"
            id="username"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>

        <div class="form-field">
          
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div class="form-field">
          
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
      </form>
      <div class="container submit-container">
      <button onClick={handleSubmit} type="submit">SIGNUP</button>
      </div>
    </div>
  );
}

export default SignUpPage;
