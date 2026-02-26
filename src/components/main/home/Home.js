import React from 'react'
import Card from './Card'
import CardData from './CardData'

function Home() {
  return (
    <div className='container'>
        <div className="content-header">
            <span>Join Us</span>
            <h1>Best Learning Opportunities</h1>
            <p>We know how large objects will act, but things on a small scale just do not act that way.</p>
            <div className="btn-quote-learn">
            <a href="#!" className="btn-quote">Get Quote Now</a>
            <a href="#!" className="btn-learn">Learn More</a>
            </div>
             </div>
            <div className="content-cards">
            {CardData.map((card) => (
                <Card 
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