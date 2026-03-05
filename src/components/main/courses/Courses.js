import React from 'react'
import CoursesData from '../Data/CoursesData'
import CourseCard from '../Cards/CourseCard'

function Courses() {
    return (
        <div className='courses-container'>
            <div className="courses-header-content">
                <span>Practice Advice</span>
                <h2>Make Online education accessible</h2>
                <p>Education is the most powerful tool to unlock potential, ignite curiosity, and shape a brighter future. At our platform, we believe in making learning accessible, engaging, and transformative, empowering students to achieve their dreams and build the skills they need to succeed ever-changing world.</p>
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
                        price={course.price}
                        discount={course.discount}
                        duration={course.duration}
                        lessons={course.lessons}
                    />
                ))}
                </div>
        </div>
    )
}

export default Courses