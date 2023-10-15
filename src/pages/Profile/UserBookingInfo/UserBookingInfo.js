import React, { useContext, useEffect, useState } from "react";
import cookie from "react-cookies";
import axios from "axios";
import './UserBookingInfo.scss'

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  
} from "mdb-react-ui-kit";
import UserTableInfo from "../UserTableInfo/UserTableInfo";
import UserCardInfo from "../UserCardInfo/UserCardInfo";
import { LoginContext } from "../../Context/Context_Login";
import { useNavigate} from "react-router-dom";
// import UserNavInfo from "../UserNavInfo/UserNavInfo";
function UserBookingInfo() {
    const [getAllbooking, setgetAllbooking] = useState([]);
    const { logout } = useContext(LoginContext);
    
    const navigate = useNavigate();

    const handleLogOut = () => {
        logout();
        navigate("/login");
      };


  useEffect(() => {
    const user = cookie.load("user");
    if (user) {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/bookings`)
        .then((response) => {
          const bookings = response.data;
          if (Array.isArray(bookings)) {
            const UserBooking = bookings.filter(
              (item) => item.customer_id === user.user_id
            );
            console.log("User Bookings: ", UserBooking);
            setgetAllbooking(UserBooking);
          } else {
            console.error("Data received is not in an array format.");
          }
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  }, []);

  return (
    <section className = "profile-main-container"style={{ paddingTop:"10%",paddingBottom:"10%",}}>
      <MDBContainer className="py-5">
       {/* <UserNavInfo/> */}

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4" style={{ width:"100%",height:"78%",}}>
              <MDBCardBody className="text-center">
               
                <MDBCardImage
                  src="https://www.its.ac.id/international/wp-content/uploads/sites/66/2020/02/blank-profile-picture-973460_1280.jpg"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "180px" }}
                  fluid
                />
                <p className="text-muted mb-1"><div id='full name'> {cookie.load('user')?.firstName}  {cookie.load('user')?.lastName}</div></p>
                <p className='text-muted mb-1'> {cookie.load('user')?.email} </p>
                <p className='text-muted mb-1'> {cookie.load('user')?.phoneNumber} </p>
                <div className="btn-profile-container">
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn className="btn-brown ms-1" outline onClick={handleLogOut} >Logout <i className="fa-solid fa-sign-out"></i></MDBBtn>

                </div>

                </div>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">

             <UserCardInfo/>

            </MDBCard>
            <MDBRow>
              <MDBCol md="20">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>                 
                 <UserTableInfo getAllbooking={getAllbooking}/>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default UserBookingInfo;
