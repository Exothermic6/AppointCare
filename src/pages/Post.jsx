import { useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { app } from "../firebase";
import { getStorage, ref, uploadString } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Post() {
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({});
  // Firebase info

  const storage = getStorage(app);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  async function handlePost(e) {
    e.preventDefault();
    const errors = {};
    (formData.file === undefined || formData.file === "") &&
      (errors.file = "Please Upload a file");
    (formData.hospitalName === undefined || formData.hospitalName === "") &&
      (errors.hospitalName = "Please enter the hospital name");
    (formData.hospitalLocation === undefined ||
      formData.hospitalLocation === "") &&
      (errors.hospitalLocation = "Please enter the hospital location");
    (formData.hospitalDetails === undefined ||
      formData.hospitalDetails === "") &&
      (errors.hospitalDetails = "Please Enter The Hospital's Details");
    (formData.slogan === undefined || formData.slogan === "") &&
      (errors.slogan = "Please Enter The Hospital's Slogan");
    (formData.workingHours === undefined || formData.workingHours === "") &&
      (errors.workingHours = "Please Enter The Working Hours");

    setFormErrors(errors);
    console.log(errors);
    console.log(formData);

    // Save to Firebase
    // Add a new document with a generated id.
    await addDoc(collection(db, "hospitals"), formData);
    console.log("Document is written");
    Important;
  }
  const uploadImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function () {
      console.log(reader.result);
      // Upload to Firebase
      const storageRef = ref(storage, `hospitals/${file.name}`);
      // Data URL string
      uploadString(storageRef, reader.result, "data_url").then((snapshot) => {
        console.log("Uploaded a data_url string!");
        const imgUrl = `https://firebasestorage.googleapis.com/v0/b/appointcare-4ae2e.appspot.com/o/hospitals%2F${file.name}?alt=media`;
        setFormData((prev) => ({ ...prev, file: imgUrl }));
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <Nav className="flex flex-1" />
      <div className=" w-[] flex justify-center items-center">
        <h1 className="text-[4rem] font-bold text-blue-400">Post A Hospital</h1>
      </div>
      <div className="bg-[url('assets/images/signin.png')] bg-no-repeat bg-cover mx-auto container">
        <form
          action=""
          className="container mx-auto flex flex-col my-[3em] shadow-2xl justify-center items-center "
        >
          <div className="mt-[7em]">
            <label className="my-[1em] font-medium text-[1.5rem] text-left">
              Hospital's Image
            </label>
            {formErrors.file && (
              <p className="text-red-500">{formErrors.file}</p>
            )}
            <input
              type="file"
              name="file"
              id=""
              placeholder="Add An Image Of The Hospital"
              className="text-left bg-red  p-4  border-2 w-[30vw] border-gray-300 rounded-full flex outline-blue-400 "
              onChange={(e) => uploadImageChange(e)}
            />
          </div>
          <div>
            <label className="my-[1em] font-medium text-[1.5rem] text-left">
              Hospital's Slogan
            </label>
            {formErrors.slogan && (
              <p className="text-red-500">{formErrors.slogan}</p>
            )}
            <input
              type="text"
              placeholder="Enter Hospital's Slogan"
              name="slogan"
              className="text-left bg-red w-[30vw] p-4  border-2  border-gray-300 rounded-full flex outline-blue-500"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="my-[1em]">
            <label className="my-[1em] font-medium text-[1.5rem] text-left">
              Hospital's Name
            </label>
            {formErrors.hospitalName && (
              <p className="text-red-500">{formErrors.hospitalName}</p>
            )}
            <input
              type="text"
              placeholder="Add The Name Of The Hospital"
              name="hospitalName"
              className="text-left bg-red w-[30vw] p-4  border-2  border-gray-300 rounded-full flex outline-blue-400"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="my-[1em]">
            <label className="my-[1em] font-medium text-[1.5rem] text-left">
              Hospital's location
            </label>
            {formErrors.hospitalLocation && (
              <p className="text-red-500">{formErrors.hospitalLocation}</p>
            )}
            <input
              type="text"
              name="hospitalLocation"
              id=""
              placeholder="Add The Location Of The Hospital"
              className="text-left bg-red  p-4 w-[30vw] border-2  border-gray-300 rounded-full flex outline-blue-400"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            {formErrors.workingHours && (
              <p className="text-red-500">{formErrors.workingHours}</p>
            )}
            <label className="my-[1em] font-medium text-[1.5rem] text-left">
              Working Hours
            </label>
            <input
              type="text"
              placeholder="Enter the working duration"
              name="workingHours"
              className="text-left bg-red  p-4  border-2 w-[30vw] border-gray-300 rounded-full flex outline-blue-400"
              onChange={(e) => handleChange(e)}
            />
            <input type="checkbox" name="" id="" />
            <label htmlFor="">24 Hours</label>
          </div>
          {/* <div className=""> */}

          <p className=" font-medium text-[1.5rem] text-left">
            Hospital's Detail
          </p>
          {/* </div> */}
          {/* <p className="my-1em text-[0.8rem] font-thin">
            (Include specialization e.g dentistry,ophthamology,cardiology e.t.c)
          </p> */}
          <div>
            {formErrors.hospitalDetails && (
              <p className="text-red-500">{formErrors.hospitalDetails}</p>
            )}
            <textarea
              name="hospitalDetails"
              id=""
              cols="40"
              rows="7"
              className="border-2 outline-blue-400"
              onChange={(e) => handleChange(e)}
              placeholder="Enter The Hospital's Details"
            ></textarea>
          </div>
          <button
            onClick={(e) => handlePost(e)}
            className="bg-[#3ba0f3] p-4 my-[1em] rounded-full text-white shadow font-medium"
          >
            Post Hospital
          </button>
        </form>
      </div>
      <Footer className="flex flex-1" />
    </div>
  );
}
