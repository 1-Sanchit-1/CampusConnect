import { react, useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Forgotpassword from "../image/forget.jpg";
import Swal from "sweetalert2";

export default function Forgot_password() {
  const [Form, setForm] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
    console.log(Form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://campus-connect-server-flame.vercel.app/forgot",
      {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Form),
        method: "POST",
      }
    );

    const data = await response.json();
    console.log(data);

    if (data.status === true) {
      Swal.fire({
        icon: "success",
        title: `Password changed successfully`,
        text: `Forgot Password.`,
      });
      setForm({});
      navigate("/Sign");
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong!",
      });
    }
  };
  return (
    <section class="flex flex-col md:flex-row h-screen items-center">
      <div class="bg-indigo-400 hidden lg:block w-full md:w-1/2 lg:w-2/2 h-screen">
        <img src={Forgotpassword} alt="" class="w-full h-full object-cover" />
      </div>

      <div
        class="bg-white w-full  md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center"
      >
        <div class="w-full h-100">
          <h1 class="text-xl md:text-2xl  font-bold leading-tight my-12">
            FORGOT PASSWORD ?
          </h1>
          <form class="mt-6" onSubmit={handleSubmit}>
            <div>
              <label class="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                placeholder="Enter Email Address"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              />
            </div>
            <div class="mt-4">
              <label class="block text-gray-700">Mobile Number</label>
              <input
                type="number"
                name="phone"
                id="phone"
                minLength="10"
                maxLength="10"
                onChange={handleChange}
                placeholder="Enter Mobile Number"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none"
                required
              />
            </div>
            <div class="mt-4">
              <label class="block text-gray-700">New Password</label>
              <input
                type="Password"
                name="password"
                id="password"
                onChange={handleChange}
                placeholder="Enter New Password"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              />
            </div>
            <button
              type="submit"
              class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
            >
              Reset Password
            </button>
            <p className="mt-8">
              Need an account?{" "}
              <Link
                to="/Registration"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
