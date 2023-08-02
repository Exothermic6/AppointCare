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
        <div className="my-[2em]">
          <label>Hospital's Image</label>
          <input
            type="file"
            name=""
            id=""
            placeholder="Add An Image Of The Hospital"
            className="text-left bg-red  p-4  border-2 border-black flex outline-none"
          />
        </div>
        <div className="my-[2em]">
          <label htmlFor="">Hospital's Name</label>
          <input
            type="text"
            placeholder="Add The Name Of The Hospital"
            className="text-left bg-red  p-4  border-2 border-black flex outline-none"
          />
        </div>
        <div className="my-[2em]">
          <label htmlFor="">Hospital's location</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Add The Location Of The Hospital"
            className="text-left bg-red  p-4  border-2 border-black flex outline-none"
          />
        </div>

        <button className="bg-[#3ba0f3] p-4 my-[1em] text-white rounded shadow">
          Book Now
        </button>
      </form>
      <Footer className="flex flex-1" />
    </div>
  );
}
