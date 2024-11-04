import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations.js";
import { selectCampers } from "../../redux/campers/selectors.js";

export default function CampersList() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  console.log(campers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div>
      <h2>Available Campers</h2>
      <ul>
        {campers.map((camper) => (
          <li key={camper.id}>
            <h3>{camper.name}</h3>
            <p>Price: {camper.price} UAH</p>
            <p>Location: {camper.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
