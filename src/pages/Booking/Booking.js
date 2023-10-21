import React from 'react'
import HotelReservation from './FormDashboard'
import HeaderCreate from './Header'

export default function Booking({ispostbookingupdate}) {
  return (
    <div>
        <HeaderCreate/>
        <HotelReservation ispostbookingupdate={ispostbookingupdate}/>
    </div>
  )
}
