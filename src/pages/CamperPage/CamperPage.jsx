import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchCamper } from "../../redux/campers/operations.js";
import { selectCamper } from "../../redux/campers/selectors.js";

export default function CamperPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const camper = useSelector(selectCamper);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamper(id));
    }
  }, [dispatch, id]);

  return (
    <div>
      <h1>{camper.name}</h1>
      <p>{camper.description}</p>
    </div>
  );
}
