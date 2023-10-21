import React, { useEffect, useState } from "react";
import axios from "axios";
import cookie from "react-cookies";
import "./EditUserInfo.scss";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EditUserInfo = () => {
  const [fulluser, setFulluser] = useState('');
  console.log(fulluser, "444444ffffulll");
  const navigate = useNavigate();
  useEffect(() => {
    const newUser = cookie.load("user");
    setFulluser(newUser);
  }, []);

  console.log(fulluser, "ffffulll");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFulluser({ ...fulluser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fulluser, "fuluserrrr");

    axios
      .put(
        `${process.env.REACT_APP_BASE_URL}/users/${
          cookie.load("user")?.user_id
        }`,
        fulluser
      )

      .then((response) => {
        cookie.save("user", fulluser);
        console.log("ressssssssss", response);
        navigate('/profile');
      })
      .catch((error) => {
        console.log("error", error);
      });
      
  };

  return (
    <div className="edit-container">
      <form onSubmit={handleSubmit} className="edit-form-container">
        <div className="edit-mb-3">
          <input
            type="text"
            className="edit-form-control"
            id="firstName"
            placeholder=""
            name="firstName"
            onChange={handleChange}
          />
          <label htmlFor="firstName" className="edit-form-label">
            First Name:
          </label>
        </div>
        <div className="edit-mb-3">
          <input
            type="text"
            className="edit-form-control"
            id="lastName"
            name="lastName"
            placeholder=""
            onChange={handleChange}
          />
          <label htmlFor="lastName" className="edit-form-label">
            Last Name:
          </label>
        </div>
        
        <div className="edit-mb-3">
          <input
            type="text"
            className="edit-form-control"
            id="phoneNumber"
            name="phoneNumber"
            placeholder=""
            onChange={handleChange}
          />
          <label htmlFor="phoneNumber" className="edit-form-label">
            Phone Number:
          </label>
        </div>
        <div className="edit-button-container">
        <Button type="submit" className="edit-button">
          Save Changes
        </Button>
         </div>
      </form>
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
    </div>
  );
};

export default EditUserInfo;

// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import cookie from "react-cookies";
// import "./EditUserInfo.scss";

// const EditUserInfo = () => {

//   // const users = useSelector((state) => state.users.users);
//   // const user_id = cookie.load("user")?.user_id;
//   // const user = users.find((x) => x.user_id === user_id);
//   // console.log("user info:", user);
//   // const {fulluser,setFulluser} = useContext(LoginContext)
//   // console.log(fulluser,"fulluserrrr")

//   const[fulluser,setFulluser]=useState('')
//   // const {fulluser} = useContext(LoginContext)
//   console.log(fulluser,"444444ffffulll")

// useEffect(()=>{
// const newUser=cookie.load('user')
// setFulluser(newUser)
// },[])
//   console.log(fulluser,"ffffulll")
//   // const [editedUser, setEditedUser] = useState("");
//   // console.log(editedUser,"new edited")

//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFulluser({ ...fulluser, [name]: value });
//     };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log(editedUser,'eeeee')
//     console.log(fulluser,'eeeee')

//     axios
//       .put(
//         `${process.env.REACT_APP_BASE_URL}/users/${
//          cookie.load('user')?.user_id
//         }`,
//         fulluser
//       )

//       .then((response) => {
//       //  setFulluser(response.data.user)
//        cookie.save('user',fulluser)

//        console.log("ressssssssss",response)
//       })
//       .catch((error) => {
//         console.log("error",error);
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="container mt-4">
//         <div className="edit-mb-3">
//           <label htmlFor="firstName" className="form-label">
//             First Name:
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="firstName"
//             name="firstName"
//             // value={full?.firstName}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="lastName" className="form-label">
//             Last Name:
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="lastName"
//             name="lastName"
//             // value={full?.lastName}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email:
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             // value={full?.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="phoneNumber" className="form-label">
//             Phone Number:
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="phoneNumber"
//             name="phoneNumber"
//             // value={full?.phoneNumber}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Save Changes
//         </button>
//       </form>
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
//     </div>
//   );
// };

// export default EditUserInfo;
