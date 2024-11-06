import css from "./Camper.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../redux/campers/slice";
import { selectFavorite } from "../../redux/campers/selectors";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineTv } from "react-icons/hi2";
import { BsWind, BsDiagram3, BsCupHot, BsUiRadios } from "react-icons/bs";
import { PiShower } from "react-icons/pi";
import { TbFridge } from "react-icons/tb";
import { LuMicrowave } from "react-icons/lu";
import { GiGasStove } from "react-icons/gi";
import { IoWaterOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

export default function Camper({ camper }) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorite);
  const isFavorite = favorites.some((fav) => fav.id === camper.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(camper.id));
    } else {
      dispatch(addToFavorites(camper));
    }
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/catalog/:id");
  };
  return (
    <div className={css.container}>
      <div className={css.image}>
        <img src={camper.gallery[0].original} alt="Camper Image 1" />
      </div>
      <div className={css.textWrap}>
        <div className={css.fRow}>
          <h4 className={css.title}>{camper.name}</h4>
          <div className={css.heart}>
            <p className={css.price}>€{camper.price}</p>
            <div className="favorite-icon" onClick={handleFavoriteToggle}>
              {isFavorite ? (
                <AiOutlineHeart color="#E44848" size={24} />
              ) : (
                <AiOutlineHeart color="black" size={24} />
              )}
            </div>
          </div>
        </div>
        <div className={css.secRow}>
          <p className={css.rating}>
            <FaStar color="#FFC531" />
            {camper.rating}({camper.reviews ? camper.reviews.length : 0}{" "}
            Reviews)
          </p>
          <p className={css.location}>{camper.location}</p>
        </div>
        <p className={css.description}>{camper.description}</p>
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

        <button className={css.btn} type="button" onClick={handleClick}>
          Show More
        </button>
      </div>
    </div>
  );
}
