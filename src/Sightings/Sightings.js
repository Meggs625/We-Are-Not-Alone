import React from 'react';
import View from '../View/View';
import './Sightings.css';

const Sightings = ({ views, deleteSighting }) => {

 
 const allSightings = views.map(view => 
      <View 
      description={view.description} 
      location={view.location}
      deleteSighting={deleteSighting}
      id={view.id}
      />)
return (
    <section>
      <h2>Sightings</h2>
      <main className='card-grid'>{allSightings}</main>    
    </section>
  )
  
}

export default Sightings;