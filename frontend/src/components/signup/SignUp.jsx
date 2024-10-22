import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import imageTobase64 from "../../helper/ImageToBase64";
import { toast } from "react-toastify";
import ApiList from "../../backendUrl/backendUrl";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);

  const [data, setData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  });

  const navigate = useNavigate();
  const handleOnchane = (e) => {
    const { name, value } = e.target;
    setData((prve) => {
      return {
        ...prve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password === data.confirmPassword) {
      const postData = await fetch(`${ApiList.signup.url}`, {
        method: ApiList.signup.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await postData.json();
      if (responseData.success) {
        toast.success(responseData.message);
        navigate("/login");
      }
      if (responseData.error) {
        toast.error(responseData.message);
      }
    } else {
      toast.error("Please check the password and confirm password");
    }
  };
  const handleUploadPic = async (e) => {
    const file = e.target.files[0];
    const imagePic = await imageTobase64(file);

    setData((prev) => {
      return { ...prev, profilePic: imagePic };
    });
  };

  return (
    <div className="md:bg-gray-200 overflow-hidden mt-20">
      <div className="container mx-auto max-w-2xl p-4 md:p-10 bg-white sm:my-10">
        <div className="flex items-center justify-between  w-[90%] mx-auto">
          <h2 className=" text-3xl md:text-5xl font-bold my-5 ">Sign Up</h2>
          <div className="w-16 h-16 rounded-full relative">
            <img
              className="w-full h-full rounded-full ring-1 p-1"
              src={data.profilePic || "/woman.png"}
              alt="signup_logo"
            />

            <form>
              <label>
                <div className="absolute bottom-4 text-xs  w-full text-center rounded-full cursor-pointer font-bold">
                  .
                </div>
                <input type="file" hidden onChange={handleUploadPic} />
              </label>
            </form>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full  justify-center items-center gap-5"
        >
          <div className="w-full">
            <input
              className="w-full outline-none border border-[#c9c9c9] text-[#5c5c5c] px-3 py-2 text-lg "
              onChange={handleOnchane}
              name="name"
              value={data.name}
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full">
            <input
              className="w-full outline-none border border-[#c9c9c9] text-[#5c5c5c] px-3 py-2 text-lg "
              onChange={handleOnchane}
              name="email"
              value={data.email}
              type="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="w-full flex items-center">
            <input
              className="w-full outline-none border border-[#c9c9c9] text-[#5c5c5c] px-3 py-2 text-lg "
              onChange={handleOnchane}
              name="password"
              value={data.password}
              type={showPassword ? "text" : "password"}
              placeholder="Your Password"
              required
            />
            <div
              onClick={() => setShowPassword((prve) => !prve)}
              className="ml-[-35px] text-2xl cursor-pointer"
            >
              <span>{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</span>
            </div>
          </div>
          <div className="w-full  flex items-center ">
            <input
              className="w-full outline-none border border-[#c9c9c9] text-[#5c5c5c] px-3 py-2 text-lg "
              onChange={handleOnchane}
              name="confirmPassword"
              value={data.confirmPassword}
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              required
            />

            <div
              onClick={() => setConfirmPassword((prve) => !prve)}
              className="ml-[-35px] text-2xl cursor-pointer"
            >
              <span>
                {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>
          </div>
          <button className="w-full  px-3 py-2 text-lg bg-[#ff4141]  text-white">
            Continue
          </button>
        </form>
        <div className="my-5 text-gray-700 space-y-3">
          <div>
            <p className="md:text-lg text-sm">
              Already have an account ?
              <Link to={"/login"} className="text-[#ff4141] ml-1 font-semibold">
                Login here
              </Link>
            </p>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <p className="md:text-lg text-sm">
              By continuing, i agree to the term of use & privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
