import Layout from "./layout/index";
import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import Tour from './pages/Tour/index'
function App() {
  return (
    <Layout>
      <Routes>

      {/* <Route path='/' element={<HomePage />} /> */}
      <Route path='/' element={<Tour />} />

      </Routes>
    </Layout>
  );
}

export default App;
