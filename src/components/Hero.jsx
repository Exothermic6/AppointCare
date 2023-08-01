export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-gray-200 to-[#3ba0f3]">
      <div className="container mx-auto flex items-center justify-center w-[100%] h-[70vh]  mb-[2em]">
        <div className="mt-5 w-[50%] p-10">
          <h1 className="font-bold text-6xl">Your Health Is A Top Priority</h1>
          <p>Is it an emergency?</p>
          <p>OR</p>
          <p>You don't wanna stay idle at the hospital?</p>
          <p>
            Appoint Care <span>Solves It All!</span>
          </p>
          <button className="bg-[#3ba0f3] text-white p-5 rounded shadow my-5">
            Book Appointment Now
          </button>
        </div>
        {/* <div className="flex gap-5"> */}
        {/* <div className="w-[10%] h-[20%]"><button className="bg-white text-black p-3 rounded">Regular CheckUp</button></div> */}
        <div className=" bg-[url('src/assets/images/doctor-pointing.png')] w-[50%] h-[60vh] bg-no-repeat bg-contain bg-right"></div>
        {/* </div> */}
      </div>
    </div>
  );
}
