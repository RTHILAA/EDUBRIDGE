import React from 'react'

function Card({ icon, title, description, color }) {
  return (
    <div className="card">
        <span className="icon" style={{ color: color }}>
        {icon}
      </span>
      <h3>{title}</h3>
      <span className="red-line"></span>
      <p>{description}</p>
    </div>
  )
}

export default Card