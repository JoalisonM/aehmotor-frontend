import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { AboutUs } from "./pages/AboutUs";
import { LandingPage } from "./pages/LandingPage";
import { RegisterStudent } from "./pages/RegisterStudent";
import { RequiredAuth } from "./contexts/Auth/RequiredAuth";
import { DefaultLayoutHome } from "./layout/DefaultLayoutHome";
import { DefaultLayoutLandingPage } from "./layout/DefaultLayoutLandingPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayoutLandingPage />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Route>
      <Route path="/home" element={<DefaultLayoutHome />}>
        <Route path="/home" element={<RequiredAuth><Home /></RequiredAuth>} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register-student" element={<RegisterStudent />} />
    </Routes>
  );
};