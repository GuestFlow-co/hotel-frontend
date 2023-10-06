import React from 'react'
import "./details.scss"
function Detalis({tour}) {
  return (
    <div className='tour-description'>
      <p>Explore Tours</p>
      <p>{tour.description}</p>
      
    </div>
  )
}

export default Detalis
