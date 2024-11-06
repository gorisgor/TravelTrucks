import css from "./Location.module.css";
import { useDispatch, useSelector } from "react-redux";
import {changeFilter} from '../../redux/filters/slice';
import { selectFilter } from "../../redux/filters/selectors";


export default function Location() {
const dispatch = useDispatch();
const filter = useSelector(selectFilter)

  const handleLocationChange = (event) => {
    dispatch(changeFilter(event.target.value))
;
  };

  return (
    <div>
      <h3>Location</h3>
      <input type="text" value={filter} placeholder="City" onChange={handleLocationChange} />
    </div>
  );
}
