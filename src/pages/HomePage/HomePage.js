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
        <div class="marquee">
          <div class="track">
            <div class="content">&nbsp;Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience Relax Enjoy Luxury Holiday Travel Discover Experience</div>
          </div>
        </div>
    </div>
  )
}

export default HomePage 
