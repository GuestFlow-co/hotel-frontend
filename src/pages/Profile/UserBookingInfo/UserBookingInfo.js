import React, { useContext, useEffect, useState } from "react";
import cookie from "react-cookies";
import axios from "axios";
import "./UserBookingInfo.scss";
import { AiFillCamera } from "react-icons/ai";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import UserTableInfo from "../UserTableInfo/UserTableInfo";
import UserCardInfo from "../UserCardInfo/UserCardInfo";
import { LoginContext } from "../../Context/Context_Login";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function UserBookingInfo() {
  const [previewImage, setPreviewImage] = useState(null);
  const handleImage = (event) => {
    const { name, files } = event.target;
    if (name === "image") {
      setPhoto({ ...photo, image: Array.from(files) });

      // Image preview logic
      const selectedImage = files[0];
      if (selectedImage) {
        const objectUrl = URL.createObjectURL(selectedImage);
        setPreviewImage(objectUrl); 
      }
    }
  };

  const initialPhotoState = {
    image: [],
  };
  const [photo, setPhoto] = useState(initialPhotoState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (const key in photo) {
      if (key === "image") {
        console.log(photo.image, "photo.imageee");
        photo.image.forEach((file) => {
          formData.append("image", file);
        });
      }
    }
    const obj = {
      image: formData.get("image"),
    };
    console.log("0000", formData.get("image"));
    console.log(obj, "objjjj");

    try {
      const res = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/user/${fulluser.user_id}`,
        formData
      );
      console.log(res.data, "aftere uploading photo");
      setFulluser(res.data);
      cookie.save("user", res.data);
    } catch (error) {
      console.error("Error:", error);
    }
    setPhoto(initialPhotoState);
  };

  const [getAllbooking, setgetAllbooking] = useState([]);
  const { logout } = useContext(LoginContext);
  const [fulluser, setFulluser] = useState("");
  console.log(fulluser, "444444");

  useEffect(() => {
    const newUser = cookie.load("user");
    setFulluser(newUser);
  }, []);

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

  console.log("cover photo", fulluser.password);

  return (
    <section
      className="profile-main-container border-transparent"
      style={{ paddingTop: "10%", paddingBottom: "10%" }}
    >
      <MDBContainer className="py-5">
        <MDBRow className="">
          <MDBCol lg="4" >
            <MDBCard
              className="mb-4 theCard"
              style={{ width: "100%", height: "95%" }}
            >
              <MDBCardBody className="text-center ">
        
                <MDBCardImage
                  src={
                    previewImage ||
                    fulluser?.coverPhoto ||
                    "https://www.its.ac.id/international/wp-content/uploads/sites/66/2020/02/blank-profile-picture-973460_1280.jpg"
                  }
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "180px", height: "180px" }}
                  fluid
                />

                <br></br>

                <label>
                  <AiFillCamera
                    type="button"
                    style={{
                      color: "#000",
                      width: "60px",
                      height: "60px",
                      marginTop: "-55%",
                    }}
                  />
                  <input
                    type="file"
                    name="image"
                    // multiple
                    onChange={handleImage}
                    style={{
                      color: "#000",
                      padding: "10px",
                      fontSize: "16px",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      opacity: 0,
                      // width: "80px",
                      // height: "80px",
                      cursor: "pointer",
                    }}
                  />
                </label>

                <p
                  style={{ paddingTop: "10px", fontSize: "20px" }}
                  className="text-muted mb-1"
                >
                  <div
                    id="full name"
                    style={{
                      color: "#000",
                      fontSize: "20px",
                      fontWeight: "20px",
                    }}
                  >
                    {" "}
                    {fulluser?.firstName} -{fulluser?.lastName}
                  </div>
                </p>

                <br></br>
                <p
                  className="text-mute mb-1"
                  style={{
                    color: "#000",
                    fontSize: "20px",
                    fontWeight: "20px",
                  }}
                >
                  {" "}
                  {fulluser?.email}{" "}
                </p>
                <p
                  className="text-mute mb-1"
                  style={{
                    color: "#000",
                    fontSize: "20px",
                    fontWeight: "20px",
                  }}
                >
                  {" "}
                  {fulluser?.phoneNumber}{" "}
                </p>
                <div
                  className="btn-profile-container"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginLeft: "-8.5%",
                  }}
                >
                  <div className="d-flex justify-content-center mb-2">
                    <Button
                      outline
                      className="btn-brown-2"
                      onClick={() => navigate("/forgotPassword")}
                      style={{ marginLeft: "112%" }}
                    >
                      Change Password
                    </Button>
                  </div>
                  <div className="d-flex justify-content-center mb-2">
                    <Button
                      className="btn-brown"
                      onClick={handleLogOut}
                      style={{ marginRight: "100%" }}
                    >
                      Logout <i className="fa-solid fa-sign-out"></i>
                    </Button>
                  </div>
                </div>
                <Button
                  className="btn-brown"
                  onClick={handleSubmit}
                  style={{
                    marginTop: "15%",
                    marginLeft: "65%",
                    fontSize: "12px",
                  }}
                >
                  <p>Save changes</p>
                </Button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8" className="border-transparent">
            <MDBCard className="mb-4 theCard">
              <UserCardInfo />
            </MDBCard>
            <MDBRow>
              <MDBCol md="20">
                <MDBCard className="mb-3 mb-md-2 theCard">
                  {" "}
                  <MDBCardBody style={{ minHeight: "50vh" }}>
                    <UserTableInfo getAllbooking={getAllbooking} />
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="bg-lines for-bg-white">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}

export default UserBookingInfo;

// import React, { useContext, useEffect, useState } from "react";
// import cookie from "react-cookies";
// import axios from "axios";
// import "./UserBookingInfo.scss";
// import {
//   MDBCol,
//   MDBContainer,
//   MDBRow,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
// } from "mdb-react-ui-kit";
// import UserTableInfo from "../UserTableInfo/UserTableInfo";
// import UserCardInfo from "../UserCardInfo/UserCardInfo";
// import { LoginContext } from "../../Context/Context_Login";
// import { useNavigate } from "react-router-dom";
// import { Button } from "react-bootstrap";

// function UserBookingInfo() {
//   const [getAllbooking, setgetAllbooking] = useState([]);
//   const { logout } = useContext(LoginContext);

//   // const users=useSelector((state)=>state.users.users)
//   // console.log("usersss",users)

//   // const user_id=cookie.load("user")?.user_id
//   // const user=users.find((x)=>x.user_id===user_id)
//   // console.log("user info",user)

//   const [fulluser, setFulluser] = useState("");
//   // const {fulluser} = useContext(LoginContext)
//   console.log(fulluser, "444444");

//   useEffect(() => {
//     const newUser = cookie.load("user");
//     setFulluser(newUser);
//   }, []);

//   const navigate = useNavigate();

//   const handleLogOut = () => {
//     logout();
//     navigate("/login");
//   };

//   useEffect(() => {
//     const user = cookie.load("user");
//     if (user) {
//       axios
//         .get(`${process.env.REACT_APP_BASE_URL}/bookings`)
//         .then((response) => {
//           const bookings = response.data;
//           if (Array.isArray(bookings)) {
//             const UserBooking = bookings.filter(
//               (item) => item.customer_id === user.user_id
//             );
//             console.log("User Bookings: ", UserBooking);
//             setgetAllbooking(UserBooking);
//           } else {
//             console.error("Data received is not in an array format.");
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching data: ", error);
//         });
//     }
//   }, []);

//   return (
//     <section
//       className="profile-main-container"
//       style={{ paddingTop: "10%", paddingBottom: "10%" }}
//     >
//       <MDBContainer className="py-5">
//         {/* <UserNavInfo/> */}
//         <MDBRow>
//           <MDBCol lg="4">
//             <MDBCard className="mb-4" style={{ width: "100%", height: "95%" }}>
//               <MDBCardBody className="text-center">
//                 <MDBCardImage
//                   src="https://www.its.ac.id/international/wp-content/uploads/sites/66/2020/02/blank-profile-picture-973460_1280.jpg"
//                   alt="avatar"
//                   className="rounded-circle"
//                   style={{ width: "180px" }}
//                   fluid
//                 />
//                 <p
//                   style={{ paddingTop: "10px", fontSize: "20px" }}
//                   className="text-muted mb-1"
//                 >
//                   <div id="full name">
//                     {" "}
//                     {fulluser?.firstName} - {/*cookie.load("user")?. */}
//                     {fulluser?.lastName}
//                   </div>
//                 </p>

//                 <br></br>
//                 <p className="text-muted mb-1"> {fulluser?.email} </p>
//                 <p className="text-muted mb-1"> {fulluser?.phoneNumber} </p>
//                 <div
//                   className="btn-profile-container"
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     marginLeft: "-8.5%",
//                   }}
//                 >
//                   <div className="d-flex justify-content-center mb-2">
//                     <Button
//                       outline
//                       className="btn-brown-2"
//                       onClick={() => navigate("/forgotPassword")}
//                       style={{ marginLeft: "112%" }}
//                     >
//                       Change Password
//                     </Button>
//                   </div>
//                   <div className="d-flex justify-content-center mb-2">
//                     <Button
//                       className="btn-brown"
//                       onClick={handleLogOut}
//                       style={{ marginRight: "100%" }}
//                     >
//                       Logout <i className="fa-solid fa-sign-out"></i>
//                     </Button>
//                   </div>
//                 </div>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//           <MDBCol lg="8">
//             <MDBCard className="mb-4">
//               <UserCardInfo />
//             </MDBCard>
//             <MDBRow>
//               <MDBCol md="20">
//                 <MDBCard className="mb-3 mb-md-2">
//                   {" "}
//                   <MDBCardBody>
//                     <UserTableInfo getAllbooking={getAllbooking} />
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//             </MDBRow>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//       <div className="bg-lines for-bg-white">
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </section>
//   );
// }

// export default UserBookingInfo;
