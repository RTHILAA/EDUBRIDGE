import React from 'react'
import HomeData from '../data/HomeData'
import HomeCards from '../../cards/HomeCards'


function Home() {
  return (
    <div className='home-container'>
        <div className="home-header-content">
            <span>Join Us</span>
            <h1>Best Learning Opportunities</h1>
            <p>We know how large objects will act, but things on a small scale just do not act that way.</p>
            <div className="btn-quote-learn">
            <a href="#!" className="btn-quote">Get Quote Now</a>
            <a href="#!" className="btn-learn">Learn More</a>
            </div>
             </div>
            <div className="home-cards-content">
            {HomeData.map((card) => (
                <HomeCards
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