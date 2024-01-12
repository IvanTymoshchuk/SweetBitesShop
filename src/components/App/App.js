import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import "swiper/css";
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';


const Home = lazy(() => import("../../pages/Home/Home"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
