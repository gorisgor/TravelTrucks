import { selectEquipments } from "../../redux/filters/selectors";
import { toggleEquipFilter } from "../../redux/filters/slice";
import css from "./VehicleEquipment.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineTv } from "react-icons/hi2";
import { BsWind, BsDiagram3, BsCupHot, BsUiRadios } from "react-icons/bs";
import { PiShower } from "react-icons/pi";
import { TbFridge } from "react-icons/tb";
import { LuMicrowave } from "react-icons/lu";
import { GiGasStove } from "react-icons/gi";
import { IoWaterOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

export default function VehicleEquipment() {
  const dispatch = useDispatch();
  const selectedEquipments = useSelector(selectEquipments);

  const equipments = [
    { key: "AC", icon: <BsWind />, label: "AC" },
    { key: "transmission", icon: <BsDiagram3 />, label: "Automatic" },
    { key: "bathroom", icon: <PiShower />, label: "Bathroom" },
    { key: "kitchen", icon: <BsCupHot />, label: "Kitchen" },
    { key: "TV", icon: <HiOutlineTv />, label: "TV" },
    { key: "radio", icon: <BsUiRadios />, label: "Radio" },
    { key: "refrigerator", icon: <TbFridge />, label: "Refridgerator" },
    { key: "microwave", icon: <LuMicrowave />, label: "Microvawe" },
    { key: "gas", icon: <GiGasStove />, label: "Gas" },
    { key: "water", icon: <IoWaterOutline />, label: "Water" },
  ];

  const handleToggleEquipment = (equipment) => {
    dispatch(toggleEquipFilter(equipment));
  };

  return (
    <div>
      <h4 className={css.title}>Vehicle equipment</h4>
      <div className={css.line}></div>
      <div className={css.equipWrap}>
        {equipments.map(({ key, icon, label }) => (
          <button
            key={key}
            onClick={() => handleToggleEquipment(key)}
            className={`${css.btn} ${
              selectedEquipments.includes(key) ? css.active : ""
            }`}
          >
            {icon} {label}
          </button>
        ))}
      </div>
    </div>
  );
}
