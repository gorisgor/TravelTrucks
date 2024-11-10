import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader.jsx";
import Error from "../../components/Error/Error.jsx";
import Features from "../../components/Features/Features.jsx";
import Reviews from "../../components/Reviews/Reviews.jsx";
import BookForm from "../../components/BookForm/BookForm.jsx";
import { fetchCamper } from "../../redux/campers/operations.js";
import {
  selectCamper,
  selectLoading,
  selectError,
} from "../../redux/campers/selectors.js";
import { FaStar } from "react-icons/fa";
import css from "./CamperPage.module.css";

export default function CamperPage() {
  const [activeTab, setActiveTab] = useState("features");
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCamper(id));
  }, [dispatch, id]);

  const camper = useSelector(selectCamper);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (!camper || Object.keys(camper).length === 0) {
    return <p>No data available for this camper.</p>;
  }

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      <div className={css.container}>
        <div className={css.fRow}>
          <h4 className={css.title}>{camper.name}</h4>
          <div className={css.wrap}>
            <p className={css.rating}>
              <FaStar color="#FFC531" />
              {camper.rating}({camper.reviews ? camper.reviews.length : 0}{" "}
              Reviews)
            </p>
            <p className={css.location}>{camper.location}</p>
          </div>
          <p className={css.price}>€{camper.price}</p>
        </div>
        <div className={css.image}>
          <img src={camper.gallery[0].original} alt="Camper Image 1" />
          <img src={camper.gallery[1].original} alt="Camper Image 2" />
          <img src={camper.gallery[2].original} alt="Camper Image 3" />
        </div>
        <p className={css.description}>{camper.description}</p>

        <div>
          <div>
            <button
              className={`${css.link} ${
                activeTab === "features" ? css.active : ""
              }`}
              onClick={() => setActiveTab("features")}
            >
              Features
            </button>
            <button
              className={`${css.link} ${
                activeTab === "reviews" ? css.active : ""
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </div>
          <div className={css.line}></div>
          <div className={css.wraper}>
            {activeTab === "features" && (
              <Features camper={camper} className="features-tab" />
            )}
            {activeTab === "reviews" && (
              <Reviews reviews={camper.reviews} className="reviews-tab" />
            )}

            <BookForm />
          </div>
        </div>
      </div>
    </>
  );
}
