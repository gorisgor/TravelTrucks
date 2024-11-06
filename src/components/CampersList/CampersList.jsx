import { useSelector } from "react-redux";
import { selectFilteredCampers } from "../../redux/campers/selectors.js";
import Camper from "../Camper/Camper.jsx";
import { useState } from "react";
import css from "./CampersList.module.css";

export default function CampersList() {
  const filteredCampers = useSelector(selectFilteredCampers);
  const [visibleCount, setVisibleCount] = useState(4);
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
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
  );
}
