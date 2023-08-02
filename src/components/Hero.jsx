import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-gray-200 to-[#3ba0f3]">
      <div className="container mx-auto flex items-center justify-center w-[100%] h-[70vh]  mb-[2em]">
        <div className="mt-5 w-[50%] p-10">
          <h1 className="font-bold text-6xl">Your Health Is A Top Priority</h1>
          <p className="font-medium text-xl">Is it an emergency?</p>
          <p className="text-center">OR</p>
          <p>You don't wanna stay idle at the hospital?</p>
          <p>
            Appoint Care <span>Solves It All!</span>
          </p>
          <Link to="booking">
            {" "}
            <button className="bg-[#3ba0f3] text-white p-5 rounded shadow my-5">
              Book Appointment Now
            </button>
          </Link>
        </div>
        <div className=" bg-[url('src/assets/images/doctor-pointing.png')] w-[50%] h-[60vh] bg-no-repeat bg-contain bg-right"></div>
      </div>
    </div>
  );
}
