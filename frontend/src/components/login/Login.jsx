import React, { useContext, useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ContextApi from "../../contexApi/Context";
import ApiList from "../../backendUrl/backendUrl";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { fetchUserDetails } = useContext(ContextApi);
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = await fetch(`${ApiList.login.url}`, {
      method: ApiList.login.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await postData.json();
    if (responseData.success) {
      toast.success(responseData.message);
      fetchUserDetails();

      navigate("/");
    }
    if (responseData.error) {
      toast.error(responseData.message);
    }
  };

  return (
    <div className="md:bg-gray-200 overflow-hidden mt-20">
      <div className="container mx-auto max-w-2xl p-10 bg-white sm:my-10">
        <h2 className="text-4xl font-bold my-5 ">Login</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full  justify-center items-center gap-5"
        >
          <div className="w-full">
            <input
              className="w-full outline-none border border-[#c9c9c9] text-[#5c5c5c] px-3 py-2 text-lg "
              onChange={handleChange}
              value={data.email}
              name="email"
              type="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="w-full flex items-center">
            <input
              className="w-full outline-none border border-[#c9c9c9] text-[#5c5c5c] px-3 py-2 text-lg "
              onChange={handleChange}
              value={data.password}
              name="password"
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
          <button className="w-full  px-3 py-2 text-lg bg-[#ff4141]  text-white">
            Continue
          </button>
        </form>
        <div className="my-5 text-gray-700 space-y-3">
          <div>
            <p className="md:text-lg text-sm">
              Create an account ?
              <Link
                to={"/signup"}
                className="text-[#ff4141] ml-1 font-semibold"
              >
                click here
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

export default Login;
