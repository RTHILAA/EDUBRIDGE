import React from 'react'
import StarRating from '../Reviews/StarRating'

function ReviewCard({ img, name, job, rating, review }) {
  return (
    <div className='review-card'>
        <div className="review-card-image">
            <img src={img} alt={name}/>
            </div>
            <div className="review-details">
                <h3>{name}</h3>
                <span>{job}</span>
               <StarRating rating={rating} />
                <p>{review}</p>
            </div>
    </div>
  )
}

export default ReviewCard