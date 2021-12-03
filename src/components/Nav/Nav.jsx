import React, {useState} from "react";
import { Link, useParams, BrowserRouter as Router,
  Switch, Route } from "react-router-dom";
import "./Nav.css";
// import Profile from "../Profile/Profile";
import IconLogo from "../../assets/Luxe_Icon.png";
import IconHome from "../../assets/Luxe_Home.png";
import IconUser from "../../assets/Luxe_User.png";

function Nav(props) {
  const { id } = useParams();
  const [userData, setUserData] = useState({
    id: "",
    email: "",
    username: ""
  });
  // const match = useRouteMatch("/profile/:id")

  return (
    <nav class="nav_component">
      <ul>
        <Link to="/home">
          <img src={IconHome} alt="" />
        </Link>
      </ul>
      <ul>
        <img src={IconLogo} alt="" />
      </ul>
      <ul>
        <Link to={`/profile/${id}`}>
          <img src={IconUser} alt="" />
        </Link>
      </ul>
    </nav>
  );
}

// <Route path="profile/*" element={<Profile/>} />
export default Nav;
