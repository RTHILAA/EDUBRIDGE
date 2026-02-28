import React from 'react'
import { Star } from 'lucide-react';


function CoursesCards({img, department, title, rating, description, sales, price, discount, duration, lessons}) {
  return (
    <div className='courses-card'> 
<img src={img} alt={title} />
<div className="deparment-rating">
    <p className='department'>{department}</p>
    <span className='rating'><Star size={20} /> {rating}</span>
</div>
        </div>
  )
}

export default CoursesCards