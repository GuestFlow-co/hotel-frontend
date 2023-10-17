import React from 'react'
import TourTable from '../../dashboradComp/Table/TourTable'

function TourDash({tours}) {
  return (
    <div>
      <TourTable tours={tours}/>
    </div>
  )
}

export default TourDash
