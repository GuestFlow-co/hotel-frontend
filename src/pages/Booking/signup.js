// import React, { useState, useEffect } from "react";
// // import { signup } from "../../store/actions/Auth/AuthActions";
// import { useDispatch } from "react-redux";
// import { Link, useHistory } from "react-router-dom";
// import { CreateButtonStyled, ListWrapper } from "./newStyle";

// const Signup = () => {
//   const dispatch = useDispatch();

//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//   });

//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSignupSub = async (e) => {
//     e.preventDefault();
//     dispatch(signup(formData))
      
//       .catch((error) => {
//         console.error("Signup failed:", error);
//       });
//   };

//   return (
//     <>
//       <ListWrapper>Sign Up</ListWrapper>
//       <div className="form-container sign-up-container overflow-scroll">
//         <form className="signup-form" onSubmit={handleSignupSub}>
//           <div className="signup-form-cont">
//             <h1 className="create-Account-h1">Create Account</h1>
//             <div className="name-inputs">
//               {scrollY >= 100 && ( // Show First Name and Last Name fields when scrolled down
//                 <>
//                   <div className="names-form-group">
//                     <input
//                       onChange={handleInputChange}
//                       name="firstName"
//                       required
//                       value={formData.firstName}
//                     />
//                     <label htmlFor="First Name">First Name</label>
//                   </div>
//                   <div className="names-form-group">
//                     <input
//                       onChange={handleInputChange}
//                       name="lastName"
//                       required
//                       value={formData.lastName}
//                     />
//                     <label htmlFor="Last Name">Last Name</label>
//                   </div>
//                 </>
//               )}
//               <div className="other-inputs-form">
//                 <div className="other-form-group">
//                   <input
//                     onChange={handleInputChange}
//                     name="username"
//                     required
//                     value={formData.username}
//                   />
//                   <label htmlFor="Username">Username</label>
//                 </div>

//                 <div className="other-form-group">
//                   <input
//                     onChange={handleInputChange}
//                     name="password"
//                     required
//                     type="password"
//                     value={formData.password}
//                   />
//                   <label htmlFor="Password">Password</label>
//                 </div>
//                 <div className="other-form-group">
//                   <input
//                     onChange={handleInputChange}
//                     name="email"
//                     required
//                     type="email"
//                     value={formData.email}
//                   />
//                   <label htmlFor="Email">Email</label>
//                 </div>

//                 <div className="other-form-group">
//                   <input
//                     onChange={handleInputChange}
//                     name="phoneNumber"
//                     required
//                     type="tel"
//                     value={formData.phoneNumber}
//                   />
//                   <label htmlFor="Phone Number">Phone Number</label>
//                 </div>
//               </div>
//               <div className="devv">
//                 <CreateButtonStyled className="sign-up-button" type="submit">
//                   Sign Up
//                 </CreateButtonStyled>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Signup;
