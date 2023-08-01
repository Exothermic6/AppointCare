import coptic from "../assets/images/coptic.jpeg";

function Institution() {
  return (
    <div className="bg-blue-100 ">
      <div className="bg-[url('assets/images/bg.jpeg')] bg-no-repeat bg-cover">
        <div className="flex container mx-auto justify-between ">
          <div className="py-3 flex-1 flex-col mt-36">
            <p>
              <span>|</span> Offering Quality Services is our top priority
            </p>
            <h1 className="text-5xl">Coptic Hospital</h1>
            <p className="text-2xl">Along ngong road</p>
            <p className="text-2xl">Open 24 hrs</p>
            <p>
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

          <div className="w-[600px] h-[600px] rounded-s-lg flex-1">
            <img
              src={coptic}
              alt=""
              className="h-[100%] w-[100%] object-contain flex justify-center rounded-s-lg"
            />
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center text-5xl my-6">BOOK NOW</h1>
        <form action="" className="text-xl flex ">
          <div className="flex flex-col flex-1 items-center gap-6">
            <div className="flex gap-8">
              <input type="text" placeholder="First Name" className="border-2 border-grey rounded-full p-3 text-xl outline-blue-400" />
              <input type="text" placeholder="Last Name" className="border-2 border-grey rounded-full p-3 text-xl outline-blue-400"/>
            </div>
            <input type="text" placeholder="Phone Number" className="border-2 border-grey rounded-full p-3 text-xl w-[75%] outline-blue-400" />
            <select name="" id="" className="w-[75%] rounded-full p-3 outline-blue-400">
              <option value="">Appointment Type</option>
              <option value="">Virtual Appointment</option>
              <option value="">Physical Appointment</option>
            </select>
          </div>
          <div className="flex-1">{/* date and time  */}</div>
          {/* <button>Submit</button> */}
        </form>
      </div>
    </div>
  );
}

export default Institution;
