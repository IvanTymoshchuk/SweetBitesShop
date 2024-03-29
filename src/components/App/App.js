import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';

const Home = lazy(() => import('../../pages/Home/Home'));
const Shop = lazy(() => import('../../pages/Shop/Shop'));
const Login = lazy(() => import("../../pages/Login/Login"));
const Profile = lazy(() => import("../../pages/Profile/Profile"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
