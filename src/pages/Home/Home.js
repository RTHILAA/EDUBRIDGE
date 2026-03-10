// pages/Home.js (example with loading state)
import React, { useState, useEffect } from 'react';
import HomeData from '../../sections/Home/HomeData';
import HomeCard from '../../sections/Home/HomeCard';
import Courses from '../../sections/Courses/Courses';
import Reviews from '../../sections/Reviews/Reviews';
import JoinUs from '../../sections/JoinUs/JoinUs';
import LoadingSpinner from '../../components/LoadingSpinner';

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className='home-page'>
      <div className='home-container'>
        <div className="home-header-content" data-aos="fade-up" data-aos-duration="1200">
          <span data-aos="fade-down" data-aos-delay="200">Welcome to EduBridge</span>
          <h1 data-aos="zoom-in" data-aos-delay="400">Your Bridge to a Brighter Future</h1>
          <p data-aos="fade-up" data-aos-delay="600">Discover top-rated online courses and expert-led training designed to help you master new skills and reach your career goals.</p>
          <div className="btn-quote-learn" data-aos="fade-up" data-aos-delay="800">
            <a href="/product" className="btn-quote">Start Learning</a>
            <a href="/pricing" className="btn-learn">View Courses</a>
          </div>
        </div>
        <div className="home-card-content">
          {HomeData.map((card, index) => (
            <div key={card.id} data-aos="fade-up" data-aos-delay={300 * (index + 1)}>
              <HomeCard
                icon={card.icon}
                title={card.title}
                description={card.description}
                color={card.color}
              />
            </div>
          ))}
        </div>
      </div>
      <Courses />
      <Reviews />
      <JoinUs />
    </div>
  );
}

export default Home;