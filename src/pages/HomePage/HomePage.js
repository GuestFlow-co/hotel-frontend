import React from 'react'
import Hero from './sections/hero/Hero'
import About from './sections/about/About'
import RoomCard from './sections/roomCard/roomCard'
import Restaurant from './sections/restaurant/Restaurant'
import TourCard from './sections/tourCard/TourCard'



function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <RoomCard />
      <TourCard />
      <Restaurant />
    </div>
  )
}

export default HomePage 
