import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import BookingTable from '../dashboradComp/Table/BookingTable'
function BookingDash({bookings,users,postbookingupdate}) {
  return (
    <div>
         <BookingTable bookings={bookings} users={users} postbookingupdate={postbookingupdate}/>

    </div>
  )
}

export default BookingDash
