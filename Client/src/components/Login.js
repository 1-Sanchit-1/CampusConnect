import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Login from "../image/login.jpg";
import userimg from "../image/user.png";

export default function Sign({ setuserData, setSession }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://campus-connect-server-flame.vercel.app/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const { status, email, user } = data;
      if (status && email === "san@gmail.com" && user === "Admin") {
        setSession(1);
        navigate("/Dashboard");
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome Admin!",
        });
      } else if (status && user === "student") {
        setSession(2);
        const userResponse = await fetch(
          "https://campus-connect-server-flame.vercel.app//student_profile",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: data.email }),
          }
        );

        if (!userResponse.ok) {
          throw new Error(`HTTP error! status: ${userResponse.status}`);
        }

        const userData = await userResponse.json();
        setuserData(userData);
        navigate("/Profile");
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome ${data.fname}!`,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid username or password!",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Failed to connect to the server. Please try again later.",
      });
    } finally {
      setForm({
        email: "",
        password: "",
      }); // Clears the form fields after submission
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-center">
      <div className="hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img src={Login} alt="Login" className="w-full h-full object-cover" />
      </div>
      <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full min-h-100">
          <div className="flex justify-center mb-1">
            <img src={userimg} alt="user-img" className="aspect-auto w-20" />
          </div>
          <div className="text-center mb-10">
            <h1 className="font-bold text-3xl text-gray-900">LOGIN</h1>
          </div>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                onChange={handleChange}
                value={form.email} // Bind input to form state
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autoFocus
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                onChange={handleChange}
                value={form.password} // Bind input to form state
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                minLength="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>

            <button className="block mt-4 w-full max-w-xs mx-auto bg-blue-500 hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-3 font-semibold">
              LOGIN
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />

          <p className="mt-8">
            Need an account?{" "}
            <Link
              to="/Registration"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
