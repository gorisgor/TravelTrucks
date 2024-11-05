import css from "./Location.module.css";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/campers/slice.js";

export default function Location() {
  const dispatch = useDispatch();

  const handleLocationChange = (event) => {
    const { value } = event.target;
    dispatch(setFilters({ location: value }));
  };

  return (
    <div>
      <h3>Location</h3>
      <input type="text" placeholder="City" onChange={handleLocationChange} />
    </div>
  );
}
