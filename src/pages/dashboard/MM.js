import React from 'react'
import Dashborad from './Dashboard'
import { Routes ,Route} from 'react-router-dom'
import MainDashboard from './dashboradComp/home/mainDashboard'
import BookingDash from './pages/BookingDash'
import Content from './dashboradComp/sideBar/content'

function MM() {
  return (
    <div>

       <Dashborad>
          <Routes>
        <Route path="/dashboard/allbooking" element={<MainDashboard />} />
        <Route path="/dashboard/d" element={<BookingDash />} />

          </Routes>

      </Dashborad>
    </div>
  )
}

export default MM
