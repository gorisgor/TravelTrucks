import css from "./VehicleType.module.css";
import { useDispatch } from "react-redux";


export default function VehicleType() {
  
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
