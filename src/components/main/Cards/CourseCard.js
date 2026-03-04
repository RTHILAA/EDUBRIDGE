import React from "react";
import { Star, Clock, BookOpen, ArrowRight } from "lucide-react";

function CourseCard({
  img,
  department,
  title,
  rating,
  description,
  sales,
  price,
  discount,
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
        <p className="department">{department}</p>
        <span className="rating">
          <Star size={20} /> {rating}
        </span>
      </div>
      <h3>{title}</h3>
      <p className="description">{description}</p>
        <span className="sales">{sales}</span>
        <div className="price">
          <span className="discount">
            <del>{discount}</del>
          </span>
          <span className="original-price">{price}</span>
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