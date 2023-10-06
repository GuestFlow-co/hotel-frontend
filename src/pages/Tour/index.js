import React from 'react'
import TourHero from './Tour-components/TourHero/TourHero'
import Checkout from './Tour-components/TourCheckout/checkout'
import TourCards from './Tour-components/Cards/TourCards'

function Tour() {
  return (
    <div>
        <div style={{ position: 'relative' }}>

      <TourHero />

      <div style={{ position: 'absolute', bottom: '-80px', width: '100%' }}>

      <Checkout />
      </div>
        </div>

       <section className="card-section">
       <TourCards />
     </section>
     <div>

     </div>
    </div>
  )
}

export default Tour
