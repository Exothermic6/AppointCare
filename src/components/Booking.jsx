import { BiSearch } from "react-icons/bi";
import { Institutions } from "../data";
import { AiOutlineHeart } from "react-icons/ai";

import { useState } from "react";

import Nav from "./Nav";
import Footer from "./Footer";



function Booking() {
  const [searchTerm,setSearchTerm] = useState("");
  return (
    <div className="text-xl">
      <Nav />
      <div className="border-2 flex border-blue-400 rounded-full p-6 container my-8 mx-auto">
        <BiSearch size={40} />
        <input
          type="text"
          placeholder="Search"
          className="border-none outline-none w-[100%]"
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex justify-center gap-6 items-center flex-wrap">
        {Institutions.map((item) => {
          if(item.institution.toLowerCase().includes(searchTerm)){
            return (  
              <div className=" flex bg-blue-100  flex-col  w-[30%] items-center rounded-lg">
                {console.log(searchTerm)}
                  <img
                    src={`src/assets/images/${item.img}`}
                    alt=""
                    className="h-[30vh] w-[30vh] object-contain flex justify-center "
                    width={500}
                    height={500}
                  />
                <div className="flex flex-col items-center">
                  <div className="flex justify-between text-blue-400">
                    <p className="text-3xl">{item.institution}</p>
                  </div>
                  <p className="text-2xl text-center w-[80%]">{item.location}</p>
                  <button className="bg-blue-400 rounded-full py-3 my-4 text-white px-10">Book Now</button>
                </div>
              </div>  
            );
          }       
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Booking;
