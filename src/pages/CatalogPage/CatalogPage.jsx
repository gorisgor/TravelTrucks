import Location from "../../components/Location/Location";
import Filters from "../../components/Filters/Filters.jsx";
import CampersList from "../../components/CampersList/CampersList";
import { useEffect, useLocation } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations.js";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <div className={css.wraper}>
        <Location />
        <div className={css.filters}>
          <Filters />
        </div>
      </div>
      <CampersList />
    </div>
  );
}
