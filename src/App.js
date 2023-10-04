import Layout from "./layout/index";
import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import Tour from './pages/Tour/index'
import Routers from "./pages/Routes";
import Popup from "./pages/pop";

function App() {
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

      <Routers />
      {/* <Popup /> */}
    </div>

  );
}

export default App;
