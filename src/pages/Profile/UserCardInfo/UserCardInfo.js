import React, { useEffect, useState } from "react";
import { MDBCol, MDBRow, MDBCardText, MDBCardBody } from "mdb-react-ui-kit";
import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function UserCardInfo() {
  const navigate = useNavigate();
  const handleEditProfile = () => {
    navigate("/editProfile");
  };

  const [fulluser, setFulluser] = useState("");
  console.log(fulluser, "444444");

  useEffect(() => {
    const newUser = cookie.load("user");
    setFulluser(newUser);
  }, []);

  return (
    <MDBCardBody style={{color:"white",fontSize:'18px',fontWeight:'500'}}>
      <MDBRow>
        <MDBCol sm="3">
          <MDBCardText style={{color:"#000"}}>First Name</MDBCardText>
        </MDBCol>
        <MDBCol sm="9">
          <MDBCardText className="text-muted">
            <div  id="First Name" style={{color:"#000"}}> {fulluser?.firstName} </div>
          </MDBCardText>
        </MDBCol>
      </MDBRow>
      <hr />
      <MDBRow>
        <MDBCol sm="3">
          <MDBCardText style={{color:"#000"}}>Last Name</MDBCardText>
        </MDBCol>
        <MDBCol sm="9">
          <MDBCardText className="text-muted">
            <div id="LastName" style={{color:"#000"}}> {fulluser?.lastName} </div>
          </MDBCardText>
        </MDBCol>
      </MDBRow>
      <hr />
      <MDBRow>
        <MDBCol sm="3">
          <MDBCardText style={{color:"#000"}}>Email</MDBCardText>
        </MDBCol>
        <MDBCol sm="9">
          <MDBCardText className="text-muted">
            <div id="email" style={{color:"#000"}}> {fulluser?.email} </div>
          </MDBCardText>
        </MDBCol>
      </MDBRow>
      <hr />
      <MDBRow>
        <MDBCol sm="3">
          <MDBCardText style={{color:"#000"}}>Phone</MDBCardText>
        </MDBCol>
        <MDBCol sm="9">
          <MDBCardText className="text-muted">
            <div id="phoneNumber" style={{color:"#000"}}> {fulluser?.phoneNumber} </div>
          </MDBCardText>
        </MDBCol>
      </MDBRow>
      <hr />
      <MDBRow></MDBRow>
      <hr />
      <div className="btn-user-edit-info" style={{ paddingRight: "24%" }}>
        <Button
          outline
          className="btn-brown-2"
          onClick={handleEditProfile}
          style={{ marginLeft: "112%" }}
        >
          Edit Profile
        </Button>
      </div>
      <MDBRow></MDBRow>
    </MDBCardBody>
  );
}












// import React, { useEffect, useState } from "react";
// import { MDBCol, MDBRow, MDBCardText, MDBCardBody } from "mdb-react-ui-kit";
// import cookie from "react-cookies";
// import { useNavigate } from "react-router-dom";
// import { Button } from "react-bootstrap";

// export default function UserCardInfo() {

//   const navigate = useNavigate();
//   const handleEditProfile = () => {
//     navigate("/editProfile");
//   };

//   // // users.user_id
//   // const users = useSelector((state) => state.users.users);
//   // const user_id = cookie.load("user")?.user_id;
//   // const user = users.find((x) => x.user_id === user_id);
//   // console.log("user", user);
//   // const {fulluser} = useContext(LoginContext)
//   // console.log(fulluser,"444444")

//   const[fulluser,setFulluser]=useState('')
//   // const {fulluser} = useContext(LoginContext)
//   console.log(fulluser,"444444")

// useEffect(()=>{
// const newUser=cookie.load('user')
// setFulluser(newUser)
// },[])
//   return (
//     <MDBCardBody style={{ backgroundColor: "#fff" }}>
//       <MDBRow>
//         <MDBCol sm="3">
//           <MDBCardText>First Name</MDBCardText>
//         </MDBCol>
//         <MDBCol sm="9">
//           <MDBCardText className="text-muted">
//             <div id="First Name"> {fulluser?.firstName} </div>
//           </MDBCardText>
//         </MDBCol>
//       </MDBRow>
//       <hr />
//       <MDBRow>
//         <MDBCol sm="3">
//           <MDBCardText>Last Name</MDBCardText>
//         </MDBCol>
//         <MDBCol sm="9">
//           <MDBCardText className="text-muted">
//             <div id="LastName"> {fulluser?.lastName} </div>
//           </MDBCardText>
//         </MDBCol>
//       </MDBRow>
//       <hr />
//       <MDBRow>
//         <MDBCol sm="3">
//           <MDBCardText>Email</MDBCardText>
//         </MDBCol>
//         <MDBCol sm="9">
//           <MDBCardText className="text-muted">
//             <div id="email"> {fulluser?.email} </div>
//           </MDBCardText>
//         </MDBCol>
//       </MDBRow>
//       <hr />
//       <MDBRow>
//         <MDBCol sm="3">
//           <MDBCardText>Phone</MDBCardText>
//         </MDBCol>
//         <MDBCol sm="9">
//           <MDBCardText className="text-muted">
//             <div id="phoneNumber"> {fulluser?.phoneNumber} </div>
//           </MDBCardText>
//         </MDBCol>
//       </MDBRow>
//       <hr />
//       <MDBRow></MDBRow>
//       <hr />
//       <div className="btn-user-edit-info" style={{ paddingRight: "24%" }}>
//         <Button
//           outline
//           className="btn-brown-2"
//           onClick={handleEditProfile}
//           style={{ marginLeft: "112%" }}
//         >
//           Edit Profile
//         </Button>
//       </div>
//       <MDBRow></MDBRow>
//     </MDBCardBody>
//   );
// }
