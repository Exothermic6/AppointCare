import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Booking from "./Booking";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="booking" element={<Booking />} />
        <Route path="register" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
