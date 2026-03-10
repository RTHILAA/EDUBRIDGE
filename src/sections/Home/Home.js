import React from 'react'
import HomeData from './HomeData'
import HomeCard from './HomeCard'
import './Home.css'

function Home() {
  return (
    <div className='home-container'>
      <div className="home-header-content">
        <span>Welcome to EduBridge</span>
        <h1>Your Bridge to a Brighter Future</h1>
        <p>Discover top-rated online courses and expert-led training designed to help you master new skills and reach your career goals.</p>
        <div className="btn-quote-learn">
          <a href="#!" className="btn-quote">Start Learning</a>
          <a href="#!" className="btn-learn">View Courses</a>
        </div>
      </div>
      <div className="home-card-content">
        {HomeData.map((card) => (
          <HomeCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
            color={card.color}
          />
        ))}
      </div>
    </div>
  )
}

export default Home