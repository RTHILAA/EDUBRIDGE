import React from 'react'
import CoursesData from './CoursesData'
import CourseCard from './CourseCard'

function Courses() {
    return (
        <div className='courses-container'>
            <div className="courses-header-content">
                <span>Explore Programs</span>
                <h2>Master In-Demand Skills</h2>
                <p>
                    Advance your career with expert-led courses designed for real-world success.
                    From creative design to technical development, start your journey today.
                </p>
            </div>
            <div className="course-card-content">
                {CoursesData.map((course) => (
                    <CourseCard
                        key={course.id}
                        img={course.img}
                        department={course.department}
                        title={course.title}
                        rating={course.rating}
                        description={course.description}
                        sales={course.sales}
                        originalPrice={course.originalPrice}
                        discountPrice={course.discountPrice}
                        duration={course.duration}
                        lessons={course.lessons}
                    />
                ))}
            </div>
        </div>
    )
}

export default Courses