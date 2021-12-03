import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function DeleteUser() {
  const [Credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  fetch(`${process.env.REACT_APP_API_URL}users/${id}`, {
    method: "delete",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
  navigate("/");

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
}

export default DeleteUser;
