import React from 'react'
import CoursesData from './CoursesData'
import CourseCard from './CourseCard'
import './Courses.css'

function Courses() {
    return (
        <div className='courses-container'>
            <div className="courses-header-content" data-aos="fade-up">
                <span data-aos="fade-down">Explore Programs</span>
                <h2 data-aos="zoom-in" data-aos-delay="200">Master In-Demand Skills</h2>
                <p data-aos="fade-up" data-aos-delay="400">
                    Advance your career with expert-led courses designed for real-world success.
                    From creative design to technical development, start your journey today.
                </p>
            </div>
            <div className="course-card-content">
                {CoursesData.map((course, index) => (
                    <div key={course.id} 
                         data-aos="zoom-in" 
                         data-aos-delay={300 * (index + 1)}
                         data-aos-duration="1000">
                        <CourseCard
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
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Courses