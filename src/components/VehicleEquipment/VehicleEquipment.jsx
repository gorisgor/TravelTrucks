import { selectEquipments } from "../../redux/filters/selectors";
import { toggleEquipFilter } from "../../redux/filters/slice";
import css from "./VehicleEquipment.module.css";
import { useDispatch, useSelector } from "react-redux";




export default function VehicleEquipment() {
const dispatch = useDispatch();
const selectedEquipments = useSelector(selectEquipments);

const equipments = [
  "AC", "Kitchen", "Bathroom", "TV", "Radio", "Refrigerator", "Microwave", "Gas", "Water", "Shower",
];

const handleToggleEquipment = (equipment) => {
  dispatch(toggleEquipFilter(equipment));
};

  return (
    <div>
      {equipments.map((equipment) => (
        <button
          key={equipment}
          onClick={() => handleToggleEquipment(equipment)}
          className={`${css.filterButton} ${selectedEquipments.includes(equipment) ? css.active : ""}`}
        >
          {equipment}
        </button>
      ))}
    </div>
  );
}
