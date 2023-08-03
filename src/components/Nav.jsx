import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Nav() {
  return (
    <div className=" bg-[#D5FFFF] p-10 text-xl">
      <div className="container mx-auto flex justify-around gap-5">
        <Link to="/">
        <div>
          <img src={logo} alt="" width={100}/>
        </div>
        </Link>
        <div className="flex justify-end gap-5">
          <ul className="flex flex-row gap-5">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/booking">
              <li>Booking</li>
            </Link>
            <Link to="/register">
              <li>Sign Up</li>
            </Link>
            <Link to="/login">
              <li>Log In</li>
            </Link>
          </ul>
        </div>
        <div>
          <Link to="/institution">
            <button className="bg-[#3ba0f3] p-3 text-white rounded-full">
              Book A Hospital
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
