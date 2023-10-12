import React from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import instance from "../../../../store/actions/instance";

import "./MainDashboard.scss";
import BookingDash from "../../pages/BookingDash";
import Content from "../sideBar/content";

// const bookings = useSelector((state) => state.bookings.bookings);
//   const dispatch = useDispatch();
function MainDashboard() {
//     useEffect(() => {
//         function fetchData() {
//          try {
//             const res =  instance.get("/bookings");
//             console.log("Bookings", res.data)
//             dispatch({
//               type: types.FETCH_BOOKINGS,
//               payload: { bookings: res.data },
//             })
//          } catch (error) {
//            console.error("Error fetching data:", error);
//          }
//        }
       
//        fetchData();
//      }, []);
//     const res =  instance.get("/bookings");
//           console.log("Bookings", res.data)
//           dispatch({
//             type: types.FETCH_BOOKINGS,
//             payload: { bookings: res.data },
//           });
  return (
    <div className="main-dev-dashbordHome">
        <div className="header-cards-dash" style={{width:"100%"}}>
            <div className="dash-card-home">
                        asd
            </div>
        </div>
        
    </div>
  );
}

export default MainDashboard;
