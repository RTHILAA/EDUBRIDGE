import React from "react";
import ReviewsData from "../Data/ReviewsData";
import ReviewCard from "../Cards/ReviewCard";

function Reviews() {
  return (
    <div className="reviews-container">
      <div className="reviews-header-content">
        <span>Success Stories</span>
        <h2>Building Bridges to Success</h2>
        <p>
          At <strong>EduBridge</strong>, our students' feedback is the
          foundation of our community. See how our courses have helped learners
          transform their skills and bridge the gap to their dream careers.
        </p>
      </div>
      <div className="review-card-content">
        {ReviewsData.map((review) => (
          <ReviewCard
            key={review.id}
            img={review.img}
            name={review.name}
            job={review.job}
            rating={review.rating}
            review={review.review}
          />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
