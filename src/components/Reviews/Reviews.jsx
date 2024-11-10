import css from "./Reviews.module.css";

import { FaStar } from "react-icons/fa";

export default function Reviews({ reviews }) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={`full-${i}`} color="#FFC531" />);
    }
    while (stars.length < 5) {
      stars.push(
        <FaStar
          className={css.star}
          key={`empty-${stars.length}`}
          color="#ccc"
        />
      );
    }
    return stars;
  };

  return (
    <div className={css.container}>
      {reviews && reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className={css.review}>
            <div className={css.avatar}>
              <span className={css.letter}>{review.reviewer_name[0]}</span>
            </div>
            <div className={css.reviewContent}>
              <h5 className={css.reviewerName}>{review.reviewer_name}</h5>
              <div className={css.stars}>
                {renderStars(review.reviewer_rating)}
              </div>
              <p className={css.comment}>{review.comment}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
}
