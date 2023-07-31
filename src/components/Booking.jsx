import { BiSearch } from "react-icons/bi";

function Booking() {
  return (
    <div className="text-xl">
      <div className="border-2 flex border-blue-400 rounded-full p-6 container my-8 mx-auto">
       <BiSearch size={40}/>
       <input type="text" placeholder="Search" className="border-none outline-none"/>
      </div>
      <h2 className="text-green-400">Hello, there</h2>
    </div>
  );
}

export default Booking;
