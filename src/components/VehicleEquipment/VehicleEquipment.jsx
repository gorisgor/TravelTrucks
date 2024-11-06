import css from "./VehicleEquipment.module.css";
import { useDispatch, useSelector } from "react-redux";




export default function VehicleEquipment() {


  return (
    <div>
      <h3>Обладнання</h3>
      {equipmentOptions.map((equipment) => (
        <label key={equipment}>
          <input
            type="checkbox"
            name={equipment}
            checked={filters[equipment] || false}
            onChange={handleEquipmentChange}
          />
          {equipment}
        </label>
      ))}
    </div>
  );
}
