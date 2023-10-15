// import { HiUserCircle } from 'react-icons/hi';
// import cookie from 'react-cookies';
import UserBookingInfo from './UserBookingInfo/UserBookingInfo';
import UserInfo from './UserInfo/UserInfo';
import UserNameInfo from './UserInfo/UserNameInfo';

//  room_number ,
// number_of_seats_inTour,
// Title,
// amount,
// check_in_date,
// check_out_date


function Profile() {
  return (
    <>
         <UserNameInfo/>
         <UserInfo/>
        <h3 className='user-h3-info'>My Booking info</h3>
        <UserBookingInfo/>

    </>
  );
}

export default Profile;