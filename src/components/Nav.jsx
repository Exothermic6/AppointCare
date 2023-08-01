export default function Nav() {
  return (
    <div className=" bg-gray-200 p-10">
      <div className="container mx-auto flex gap-5">
        <div>
          <h1>LOGO</h1>
        </div>
        <div className="flex justify-end gap-5">
          <ul className="flex flex-row gap-5">
            <li>Home</li>
            <li>Booking</li>
            <li>Sign Up</li>
            <li>Log In</li>
          </ul>
          <div>
            <button className="bg-[#3ba0f3] p-3 text-white rounded-full">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
