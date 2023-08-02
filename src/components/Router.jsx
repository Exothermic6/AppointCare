import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Booking from "./Booking";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import Post from "../pages/Post";
import InstitutionPage from "../pages/InstitutionPage";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/post" element={<Post />} />
        <Route path="/institution" element={<InstitutionPage />}/>
      </Routes>
    </BrowserRouter>
  );
}
