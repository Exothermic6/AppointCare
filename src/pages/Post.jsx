import { useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Post() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  function handleSignup(e) {
    e.preventDefault();
    const errors = {};
    (formData.file === undefined || formData.file === "") &&
      (errors.file = "Please Upload a file");
    (formData.hospitalName === undefined || formData.hospitalName === "") &&
      (errors.hospitalName = "Please enter the hospital name");
    (formData.hospitalLocation === undefined ||
      formData.hospitalLocation === "") &&
      (errors.hospitalLocation = "Please enter the hospital location");

    setFormErrors(errors);
    console.log(errors);
    console.log(formData);
  }
  // const uploadImageCh=()=>{}
  return (
    <div>
      <Nav className="flex flex-1" />
      <form
        action=""
        className="container mx-auto flex flex-col shadow-xl w-[30vw] my-[3em] justify-center items-center"
      >
        <div className="my-[1em]">
          <label className="my-[1em] font-medium text-[1.5rem] text-left">
            Hospital's Image
          </label>
          <input
            type="file"
            name="file"
            id=""
            placeholder="Add An Image Of The Hospital"
            className="text-left bg-red  p-4  border-2 border-gray-300 rounded-full flex outline-blue-400"
          />
        </div>
        <div className="my-[1em]">
          <label className="my-[1em] font-medium text-[1.5rem] text-left">
            Hospital's Name
          </label>
          <input
            type="text"
            placeholder="Add The Name Of The Hospital"
            name="hospitalName"
            className="text-left bg-red  p-4  border-2  border-gray-300 rounded-full flex outline-blue-400"
          />
        </div>
        <div className="my-[1em]">
          <label className="my-[1em] font-medium text-[1.5rem] text-left">
            Hospital's location
          </label>
          <input
            type="text"
            name="hospitalLocation"
            id=""
            placeholder="Add The Location Of The Hospital"
            className="text-left bg-red  p-4  border-2  border-gray-300 rounded-full flex outline-blue-500"
          />
        </div>

        <button className="bg-[#3ba0f3] p-4 my-[1em] rounded-full text-white shadow">
          Post Hospital
        </button>
      </form>
      <Footer className="flex flex-1" />
    </div>
  );
}
