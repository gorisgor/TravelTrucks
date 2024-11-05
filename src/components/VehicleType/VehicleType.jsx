import css from "./VehicleType.module.css";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/campers/slice.js";

export default function VehicleType() {
  const dispatch = useDispatch();

  const handleVehicleTypeChange = (event) => {
    const { value } = event.target;
    dispatch(setFilters({ bodyType: value }));
  };

  return (
    <div>
      <h3>Тип транспортного засобу</h3>
      <select onChange={handleVehicleTypeChange}>
        <option value="">All</option>
        <option value="Van">Van</option>
        <option value="Fully Integrated">Fully Integrated</option>
        <option value="Alcove">Alcove</option>
      </select>
    </div>
  );
}
