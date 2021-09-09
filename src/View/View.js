import React from 'react';
import './View.css'

const View = ({ id, location, description, deleteSighting }) => {
  return (
    <section className='view-card'> 
      <h1>{location}</h1>
      <p>{description}</p>
      <button 
      className='delete'
      onClick={() => deleteSighting(id)}>Debunked</button>
    </section>
  )
}

export default View;