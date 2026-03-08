import React from "react";
import { Star, Clock, BookOpen, ArrowRight } from "lucide-react";

function CourseCard({
  img,
  department,
  title,
  rating,
  description,
  sales,
  originalPrice,
  discountPrice,
  duration,
  lessons,
}) {
  return (
    <div className="course-card">
      <div className="course-card-image">
      <img src={img} alt={title} />
      </div>
      <div className="course-details">
      <div className="department-rating">
        <h3 className="department">{department}</h3>
        <span className="rating">
          <Star size={20} /> {rating}
        </span>
      </div>
      <span className="title">{title}</span>
      <p className="description">{description}</p>
        <span className="sales">{sales}</span>
        <div className="price">
          <span className="original-price">
            <del>${originalPrice}</del>
          </span>
          <span className="discount-price">${discountPrice}</span>
        </div>
      <div className="course-duration-lessons">
        <span>
          <Clock size={16} />
          {duration}
        </span>
        <span>
          <BookOpen size={16} />
          {lessons}
        </span>
      </div>
      <a href="#!" className="btn-view-course">View Course<ArrowRight size={16} /></a>
    </div>
    </div>
  );
}

export default CourseCard;