import coptic from "../assets/images/coptic.jpeg";
import React, { useRef, useState } from "react";

const DatePicker = () => {
  const [date, setDate] = useState("");
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };
};

function Institution() {
  return (
      <div className="">
    <div className=" bg-[url('assets/images/bg.jpeg')] bg-no-repeat bg-cover pt-10">
        <div className="flex container mx-auto justify-between ">
          <div className="flex flex-col flex-1">
        <div className="w-[400px] h-400px] rounded-s-lg flex-1">
            <img
              src={coptic}
              alt=""
              className="h-[100%] w-[100%] object-contain flex justify-center rounded-s-lg"
            />
          </div>

          <div className="py-3 flex-1 flex-col ">
            <p className="text-2xl">
              <span className="text-4xl">|</span> Offering Quality Services is our top priority
            </p>
            <h1 className="text-5xl pt-4 text-blue-400">Coptic Hospital</h1>
            <p className="text-2xl py-4 text-blue-300">Along ngong road</p>
            <p className="text-2xl">Open 24 hrs</p>
            <p className="w-[80%] text-xl pt-4">
              Coptic Hospital is a fully fledged hospital that is part of the
              Coptic Orthodox Church.Our aim is to offer affordable medical care
              while ensuring that quality is not compromised at any point. The
              recently expanded Coptic Hospital has increased our capacity to
              handle a large capacity of patients for a varied number of
              services both as outpatient and Inpatient. The outstanding
              facilities and professionalism has made Coptic Hospital a top
              preference of many in the region.
            </p>
          </div>                      
          </div>

          <div className="flex flex-col flex-1">
        <h1 className="text-center text-5xl my-6">BOOK NOW</h1>
        <form action="" className="text-xl flex flex-col ">
          <div className="flex flex-col flex-1 items-center gap-6">
            <div className="flex gap-8">
              <input
                type="text"
                placeholder="First Name"
                className="border-2 border-grey rounded-full p-3 text-xl outline-blue-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border-2 border-grey rounded-full p-3 text-xl outline-blue-400"
              />
            </div>
            <input
              type="text"
              placeholder="Phone Number"
              className="border-2 border-grey rounded-full p-3 text-xl w-[90%] outline-blue-400"
            />
            <select
              name=""
              id=""
              className="w-[90%] rounded-full p-3 outline-blue-400"
            >
              <option value="">Appointment Type</option>
              <option value="">Virtual Appointment</option>
              <option value="">Physical Appointment</option>
            </select>
          </div>
          <div className="flex-1 pt-12">
            <p>Date:</p>
            <input
              type="date"
              onChange={(e) => handleChange(e)}
              className="p-4 rounded-full border-2 border-blue-400"
            />
          </div>
        </form>
        <div className="w-[100%] flex "> 
          <button className="my-10 py-6 text-xl w-[40%] mx-auto bg-blue-500 rounded-full text-white">Submit</button>
        </div>
      </div>


        </div>
      </div>

    </div>
  );
}

export default Institution;
