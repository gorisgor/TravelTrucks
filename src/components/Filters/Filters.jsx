import VehicleEquipment from "../VehicleEquipment/VehicleEquipment.jsx";
import VehicleType from "../VehicleType/VehicleType.jsx";
import css from "./Filters.module.css";

export default function Filters() {
  return (
    <div>
      <h3 className={css.title}>Filters</h3>
      <VehicleEquipment />
      <VehicleType />
    </div>
  );
}
