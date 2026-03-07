import React from 'react'

function JoinUs() {
  return (
    <div className='join-us-container'>
      <span>Practice Advice</span>
     <h2>Join Our Community</h2>
      <p>
        Get expert advice and exclusive tips delivered straight to your inbox. 
        Stay ahead of the curve with our weekly updates and professional insights.
      </p>
      <form className="email-subscribe">
        <input type="email" className='email' placeholder="Enter your email" required />
        <button type="submit" className='btn-subscribe'>Subscribe</button>
      </form>
    </div>
  )
}

export default JoinUs