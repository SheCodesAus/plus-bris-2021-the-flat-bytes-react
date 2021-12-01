import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function UpdateUser() {
  const [Credentials, setCredentials] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };

  const updateData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}users/${id}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(Credentials),
      }
    );
    navigate("/profile");
    return response.json();
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users/${id}`)
      .then((results) => {
        console.log("results", results);
        return results.json();
      })
      .then((data) => {
        setCredentials(data);
      });
  });

  const saveChanges = (e) => {
    e.preventDefault();
    if (window.localStorage.getItem("token")) {
      updateData().then((response) => {
        console.log("response", response);
        navigate("/");
      });
    }
  };

  return (
    <div>
      <form class="container">
        <div class="form-field">
          <label htmlFor="First name"></label>
          <input
            value={Credentials.first_name}
            type="text"
            id="first_name"
            placeholder="First name"
            onChange={handleChange}
          />
        </div>
        <div class="form-field">
          <input
            value={Credentials.last_name}
            type="text"
            id="last_name"
            placeholder="Last name"
            onChange={handleChange}
          />
        </div>

        <div class="form-field">
          <input
            value={Credentials.username}
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>

        <div class="form-field">
          <input
            value={Credentials.email}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div class="form-field">
          <input
            value={Credentials.password}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
      </form>
      <div class="container submit-container">
        <button onClick={saveChanges} type="submit">
          SAVE CHANGES
        </button>
      </div>
    </div>
  );
}

export default UpdateUser;
