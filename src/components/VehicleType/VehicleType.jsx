import css from "./VehicleType.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTypeFilter } from "../../redux/filters/slice";
import { selectType } from "../../redux/filters/selectors";
import { BsGrid1X2, BsGrid, BsGrid3X3Gap } from "react-icons/bs";

export default function VehicleType() {
  const dispatch = useDispatch();
  const selectedVehicleType = useSelector(selectType);

  const types = [
    { key: "panelTruck", icon: <BsGrid1X2 />, label: "Van" },
    { key: "fullyIntegrated", icon: <BsGrid />, label: "Fully Integrated" },
    { key: "alcove", icon: <BsGrid3X3Gap />, label: "Alcove" },
  ];

  const handleVehicleTypeChange = (type) => {
    if (selectedVehicleType === type) {
      dispatch(toggleTypeFilter(""));
    } else {
      dispatch(toggleTypeFilter(type));
    }
  };

  return (
    <div>
      <h4 className={css.title}>Vehicle Type</h4>
      <div className={css.line}></div>
      <div className={css.typeWrap}>
        {types.map(({ key, icon, label }) => (
          <button
            key={key}
            onClick={() => handleVehicleTypeChange(key)}
            className={`${css.btn} ${
              selectedVehicleType === key ? css.active : ""
            }`}
          >
            {icon} {label}
          </button>
        ))}
      </div>
    </div>
  );
}
