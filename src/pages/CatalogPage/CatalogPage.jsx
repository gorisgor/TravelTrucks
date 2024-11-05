import Location from "../../components/Location/Location";
import VehicleEquipment from "../../components/VehicleEquipment/VehicleEquipment.jsx";
import VehicleType from "../../components/VehicleType/VehicleType.jsx";
import CampersList from "../../components/CampersList/CampersList";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  return (
    <div className={css.container}>
      <div className={css.wraper}>
        <Location />
        <div className={css.filters}>
          <VehicleEquipment />
          <VehicleType />
          <button className={css.btn} type="button">
            Search
          </button>
        </div>
      </div>
      <CampersList />
    </div>
  );
}
