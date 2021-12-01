// import { React, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import CarCard from "../components/CarCard/CarCard";
// import Form from "../components/Form/Form";

// function CarDetailPage() {
//   const [suggestedCar, setSuggestedCar] = useState({
//     id,
//     image,
//     make,
//     car_model,
//     price,
//     colour,
//     body_type,
//     url,
//   });
//   const { id } = useParams();
//   const navigate = useNavigate();

//   fetch(`${process.env.REACT_APP_API_URL}products/${id}`, {
//     method: "get",
//     headers: {
//       Authorization: `Token ${localStorage.getItem("token")}`,
//     },
//   });
//   navigate("/");

//   return (
//     <div>
//       <h3>Car make: {make}</h3>
//       <h3>Car model: {car_model}</h3>
//       <h3>Car price: $ {price}</h3>
//       <h3>Car color: {colour}</h3>
//       <h3>Car body type: {body_type}</h3>
//       <h3>More car details here: {url}</h3>
//     </div>
//   );
// }

// export default CarDetailPage;
