import Layout from "./layout/index";
import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import Routers from "./pages/Routes";
import Popup from "./pages/pop";

function App() {
  return (
    <>
   <Popup/>
  <Routers/>
  </>
  );
}

export default App;
