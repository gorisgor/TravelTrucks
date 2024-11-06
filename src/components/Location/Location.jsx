import css from "./Location.module.css";
import { useDispatch, useSelector } from "react-redux";
import {changeFilter} from '../../redux/filters/slice';
import { selectFilter } from "../../redux/filters/selectors";
import { CiMap } from "react-icons/ci";
import { useState } from "react";


export default function Location() {
const dispatch = useDispatch();
const filter = useSelector(selectFilter)
const [hasText, setHasText] = useState(false);
  const handleLocationChange = (event) => {
    const text = event.target.value;
    setHasText(text.length > 0);
    dispatch(changeFilter(text));
  };
  return (
    <div>
      <h3 className={css.title}>Location</h3>
      <div className={css.inputWrapper}>
        <CiMap className={`${css.icon} ${hasText ? css.iconActive : ""}`}/>
      <input type="text" value={filter} placeholder="City" onChange={handleLocationChange} />
      </div> 
    </div>
  );
}
