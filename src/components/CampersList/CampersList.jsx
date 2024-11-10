import { useSelector } from "react-redux";
import {
  selectError,
  selectFilteredCampers,
  selectLoading,
} from "../../redux/campers/selectors.js";
import Camper from "../Camper/Camper.jsx";
import { useState } from "react";
import css from "./CampersList.module.css";

export default function CampersList() {
  const filteredCampers = useSelector(selectFilteredCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [visibleCount, setVisibleCount] = useState(4);
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  if (!filteredCampers || Object.keys(filteredCampers).length === 0) {
    return <p>No data available for campers list.</p>;
  }

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      <div className={css.container}>
        {filteredCampers.slice(0, visibleCount).map((camper) => (
          <Camper key={camper.id} camper={camper} />
        ))}

        {filteredCampers.length > visibleCount && (
          <button onClick={handleLoadMore} className={css.loadMoreBtn}>
            Load More
          </button>
        )}
      </div>
    </>
  );
}
