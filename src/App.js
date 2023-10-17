
import { useSelector } from "react-redux";
import HotelReservation from "./pages/Booking/FormDashboard";
import Routers from "./pages/Routes";
import Popup from "./pages/pop";


function App() {
  const bookings = useSelector((state) => state.bookings.bookings);
  console.log(bookings)
  return (
    // <Layout>
    //   <Routes>

    //   {/* <Route path='/' element={<HomePage />} /> */}
    //   <Route path='/tour' element={<Tour />} />
    //   <Route path='/Routers' element={<Routers />} />
    //   <Route path='/Popup' element={<Popup />} />

    //   </Routes>
    // </Layout>
    <div>
      <Popup/>
      <Routers />
        {/* <HotelReservation/> */}
    </div>

  );
}

export default App;
