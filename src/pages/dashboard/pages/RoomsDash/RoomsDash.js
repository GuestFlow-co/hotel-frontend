import React from 'react'
import "./RoomsDash.scss"
import RoomsTable from '../../dashboradComp/Table/RoomsTable/RoomsTable'
function RoomsDash({rooms}) {
  return (
    <div>
      <RoomsTable rooms={rooms}/>
    </div>
  )
}

export default RoomsDash
