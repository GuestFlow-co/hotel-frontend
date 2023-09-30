import Layout from "./layout/index";
import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Layout>
      <Routes>

      <Route path='/' element={<HomePage />} />

      </Routes>
    </Layout>
  );
}

export default App;
