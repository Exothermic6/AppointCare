import { BiSearch } from "react-icons/bi";
import { Institutions } from "../data";
import { AiOutlineHeart } from "react-icons/ai";
import Nav from "./Nav";
import Footer from "./Footer";


function Booking() {
  return (
    <div className="text-xl">
      <Nav />
      <div className="border-2 flex border-blue-400 rounded-full p-6 container my-8 mx-auto">
        <BiSearch size={40} />
        <input
          type="text"
          placeholder="Search"
          className="border-none outline-none"
        />
      </div>

      <div className="flex justify-center gap-6 items-center flex-wrap">
        {Institutions.map((item) => {
          return (
            <div>
              <div className="h-[500px] w-[500px] bg-gray-100 relative hh p-4">
                <img
                  src={`src/assets/images/${item.img}`}
                  alt=""
                  className="h-[100%] w-[100%] object-contain flex justify-center"
                />
                <div className="flex justify-center"></div>
              </div>
              <div className="py-3">
                <div className="flex justify-between text-blue-400">
                  <p className="text-3xl">{item.institution}</p>
                </div>
                <p className="text-2xl">{item.location}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Booking;
