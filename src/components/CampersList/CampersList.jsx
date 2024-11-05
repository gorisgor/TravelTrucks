import { useSelector } from "react-redux";
import { selectFilteredCampers } from "../../redux/campers/selectors.js";
import Camper from "../Camper/Camper.jsx";

export default function CampersList() {
  const filteredCampers = useSelector(selectFilteredCampers);

  return (
    <div>
      {filteredCampers.map((camper) => (
        <Camper key={camper.id} camper={camper} />
      ))}
    </div>
  );
}
