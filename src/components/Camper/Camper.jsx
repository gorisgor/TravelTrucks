import css from "./Camper.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../redux/campers/slice';
import { selectFavorite } from "../../redux/campers/selectors";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';


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
  return (
    <div className={css.container}>
      <div className={css.image}>
        <img src={camper.gallery[0].thumb} alt="Camper Image 1" />
      </div>
      <h4 className={css.title}>{camper.name}</h4>
      <p className={css.price}>{camper.price}</p>
      <div className="favorite-icon" onClick={handleFavoriteToggle}>
      {isFavorite ? (
          <AiOutlineHeart color="yellow" size={24} /> 
        ) : (
          <AiOutlineHeart color="black" size={24} /> 
        )}
      </div>
      <p className={css.location}>{camper.location}</p>
      <p className={css.description}>{camper.description}</p>  
      <p className={css.rating}>{camper.rating}({camper.reviews ? camper.reviews.length : 0} Reviews)</p>
      
   
        <div >
          <ul>
            <li> {camper.AC&& <p>AC</p>}</li>
            <li> {camper.bathroom && <p>Bathroom</p>}</li>
            <li> {camper.kitchen && <p>Kitchen</p>}</li>
            <li> {camper.TV && <p>TV</p>}</li>
            <li> {camper.radio && <p>Radio</p>}</li>
            <li> {camper.refrigerator && <p>Refrigerator</p>}</li>
            <li> {camper.microwave && <p>Microwave</p>}</li>
            <li> {camper.gas && <p>Gas</p>}</li>
            <li> {camper.water && <p>Water</p>}</li>
          </ul>
        </div>
      </div>
  );
}

