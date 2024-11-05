import css from "./VehicleEquipment.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../redux/campers/slice.js";

const equipmentOptions = [
  "AC",
  "kitchen",
  "TV",
  "radio",
  "refrigerator",
  "microwave",
  "gas",
  "water",
  "bathroom",
];

export default function VehicleEquipment() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.campers.filters.equipment || {});

  const handleEquipmentChange = (event) => {
    const { name, checked } = event.target;
    dispatch(
      setFilters({
        ...filters,
        equipment: { ...filters.equipment, [name]: checked },
      })
    );
  };

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
