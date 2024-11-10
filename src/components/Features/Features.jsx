import { HiOutlineTv } from "react-icons/hi2";
import { BsWind, BsDiagram3, BsCupHot, BsUiRadios } from "react-icons/bs";
import { PiShower } from "react-icons/pi";
import { TbFridge } from "react-icons/tb";
import { LuMicrowave } from "react-icons/lu";
import { GiGasStove } from "react-icons/gi";
import { IoWaterOutline } from "react-icons/io5";
import css from "./Features.module.css";

export default function Features({ camper }) {
  const formatString = (str) => {
    return str
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (char) => char.toUpperCase());
  };

  return (
    <div className={css.container}>
      <ul className={css.eqList}>
        {[
          { key: "AC", icon: <BsWind />, label: "AC" },
          {
            key: "transmission",
            icon: <BsDiagram3 />,
            label:
              camper.transmission &&
              camper.transmission.charAt(0).toUpperCase() +
                camper.transmission.slice(1),
          },
          { key: "bathroom", icon: <PiShower />, label: "Bathroom" },
          { key: "kitchen", icon: <BsCupHot />, label: "Kitchen" },
          { key: "TV", icon: <HiOutlineTv />, label: "TV" },
          { key: "radio", icon: <BsUiRadios />, label: "Radio" },
          { key: "refrigerator", icon: <TbFridge />, label: "Refrigerator" },
          { key: "microwave", icon: <LuMicrowave />, label: "Microwave" },
          { key: "gas", icon: <GiGasStove />, label: "Gas" },
          { key: "water", icon: <IoWaterOutline />, label: "Water" },
        ]
          .filter((item) => camper[item.key])
          .map((item, index) => (
            <li key={index} className={css.item}>
              <p>
                {item.icon} {item.label}
              </p>
            </li>
          ))}
      </ul>

      <h4 className={css.title}>Vehicle details</h4>
      <div className={css.line}></div>
      <ul className={css.list}>
        <li className={css.items}>
          <p>Form </p>
          {formatString(camper.form)}
        </li>
        <li className={css.items}>
          <p>Length </p>
          {camper.length}
        </li>
        <li className={css.items}>
          <p>Width </p>
          {camper.width}
        </li>
        <li className={css.items}>
          <p>Heigh </p>
          {camper.heigh}
        </li>
        <li className={css.items}>
          <p>Tank </p>
          {camper.tank}
        </li>
        <li className={css.items}>
          <p>Consumption </p>
          {camper.consumption}
        </li>
      </ul>
    </div>
  );
}
