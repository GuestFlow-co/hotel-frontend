import React from 'react'
import "./RoomsDash.scss"
import RoomsTable from '../../dashboradComp/Table/RoomsTable/RoomsTable'
function RoomsDash({rooms,isupdated,updated}) {
  return (
    <div>
      <RoomsTable rooms={rooms} isupdated={isupdated} updated={updated} />
    </div>
  )
}

export default RoomsDash
