import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function DeleteUser() {
  const [Credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const DeleteProject = async () => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}`, {
      method: "delete",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    });
    history.push("/");
  };
}

export default DeleteUser;
