import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

function LogIn() {
  const [show, setShow] = useState();
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleLogin(e) {
    e.preventDefault();
    const errors = {};
    (formData.email === undefined || formData.email === "") &&
      (errors.email = "Please enter your Email");
    (formData.password === undefined || formData.password === "") &&
      (errors.password = "Please enter your Password");

    setFormErrors(errors);
    console.log(errors);
    console.log(formData);
  }

  return (
    <div className="flex text-xl">
      <div className="bg-[url('assets/images/login.png')] bg-no-repeat bg-right bg-contain flex-1"></div>
      <div className="text-center flex-1 mx-12">
        <h1 className="text-5xl font-bold my-20">Log in to your account</h1>
        <form action="" className="flex flex-col">
          <div className="flex flex-col gap-16">
            {formErrors.email && (
              <p className="text-red-500">{formErrors.email}</p>
            )}
            <input
              type="email"
              placeholder="EmailAddress"
              className="rounded-full py-6 px-6 border-2 border-gray-300"
              name="email"
              onChange={(e) => handleChange(e)}
            />
            {formErrors.password && (
              <p className="text-red-500">{formErrors.password}</p>
            )}
            <div className="text-left bg-red rounded-full py-6 px-6 border-2 border-gray-300 flex">
              <input
                type={show ? "text" : "password"} 
                placeholder="Password"
                className="w-[100%] outline-none"
                name="password"
                onChange={(e) => handleChange(e)}
              />
              <div onClick={() => setShow((prev) => !prev)}>
                {show ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
              </div>
            </div>
          </div>
          <div className="flex my-16 justify-between">
            <div className="flex gap-4">
              <input type="checkbox" className="w-6 h-6" />
              <p>Remember me</p>
            </div>
            <div>
              <p>Forgot Your Password?</p>
            </div>
          </div>
          <button
            className="bg-[#45c9a1] rounded-full py-8 px-6 text-white text-2xl font-weight"
            onClick={(e) => handleLogin(e)}
          >
            Sign in
          </button>
        </form>
        <p className="my-10">OR</p>
        <div className="flex items-center gap-8 my-12 justify-center">
          <div>
            <img src="" alt="" />
          </div>
          <div className="text-3xl text-blue-500 font-bold ">
            <p>Log In With Google</p>
          </div>
        </div>
        <p className="my-12">
          Don't have an account yet?{" "}
          <span className="text-[#45c9a1]">Sign Up free</span>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
