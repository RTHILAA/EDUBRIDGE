import React from "react";
import ReviewsData from "./ReviewsData";
import ReviewCard from "./ReviewCard";
import "./Reviews.css";

function Reviews() {
  return (
    <div className="reviews-container">
      <div className="reviews-header-content" data-aos="fade-up">
        <span data-aos="fade-down">Success Stories</span>
        <h2 data-aos="zoom-in" data-aos-delay="200">Real Stories, Real Success</h2>
        <p data-aos="fade-up" data-aos-delay="400">
          At <strong>EduBridge</strong>, our community is built on the success of our learners.
          Discover how our students have bridged the gap between learning and their dream careers.
        </p>
      </div>
      <div className="review-card-content">
        {ReviewsData.map((review, index) => (
          <div key={review.id} 
               data-aos="fade-right" 
               data-aos-delay={400 * (index + 1)}
               data-aos-duration="1000">
            <ReviewCard
              img={review.img}
              name={review.name}
              job={review.job}
              rating={review.rating}
              review={review.review}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;