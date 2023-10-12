import React from 'react'
import Hero from './sections/hero/Hero'
import About from './sections/about/About'
import RoomCard from './sections/roomCard/roomCard'
import Video from './sections/video/Video'

function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <RoomCard />
      <Video/>
    </div>
  )
}

export default HomePage 
