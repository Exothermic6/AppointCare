import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Post() {
  return (
    <div>
      <Nav className="flex flex-1" />
      <form
        action=""
        className="container mx-auto flex flex-col shadow-xl w-[30vw] my-[3em] justify-center items-center"
      >
        <div className="my-[1em]">
          <label className="my-[1em] font-medium text-[1.5rem] text-left">Hospital's Image</label>
          <input
            type="file"
            name=""
            id=""
            placeholder="Add An Image Of The Hospital"
            className="text-left bg-red  p-4  border-2 border-gray-300 rounded-full flex outline-blue-400"
          />
        </div>
        <div className="my-[1em]">
          <label className="my-[1em] font-medium text-[1.5rem] text-left">Hospital's Name</label>
          <input
            type="text"
            placeholder="Add The Name Of The Hospital"
            className="text-left bg-red  p-4  border-2  border-gray-300 rounded-full flex outline-blue-400"
          />
        </div>
        <div className="my-[1em]">
          <label className="my-[1em] font-medium text-[1.5rem] text-left">Hospital's location</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Add The Location Of The Hospital"
            className="text-left bg-red  p-4  border-2  border-gray-300 rounded-full flex outline-blue-500"
          />
        </div>

        <button className="bg-[#3ba0f3] p-4 my-[1em] rounded-full text-white shadow">
          Book Now
        </button>
      </form>
      <Footer className="flex flex-1" />
    </div>
  );
}
