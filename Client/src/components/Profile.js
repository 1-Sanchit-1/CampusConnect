import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../image/logo.png";

export default function Profile() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    Name: "",
    registrationNumber: "",
    score: "",
    aadhaar: "",
    religion: "",
    category: "",
    class12Percentage: "",
    class10Percentage: "",
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
      const response = await fetch("http://localhost:5000/api/admissionform", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(form),
        method: "POST",
      });

      const result = await response.json();
      const { status } = result;
      console.log(status);
      if (status) {
        Swal.fire({
          title: "Submission Successful!",
          text: "Thank you for submitting your data.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Failed to submit data. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      Swal.fire({
        title: "Error",
        text: "An error occurred while submitting the form. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setForm({
        Name: "",
        registrationNumber: "",
        score: "",
        aadhaar: "",
        religion: "",
        category: "",
        class12Percentage: "",
        class10Percentage: "",
      });
    }
  };

  const handleClick = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/");
    }
  };

  return (
    <>
      <header className="bg-white text-black py-6 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={logo}
            alt="IIIT Lucknow"
            className="h-12 w-12 rounded-full mr-4"
          />
          <div>
            {/* <h1 className="text-2xl font-semibold">Welcome to IIIT Lucknow</h1> */}
            <p className="text-2xl font-bold">
              Indian Institute of Information Technology, Lucknow
            </p>
            <p className="text-xl font-semibold mt-2">
              भारतीय सूचना प्रौद्योगिकी संस्थान, लखनऊ
            </p>
            <p className="text-sm mt-2">
              (An Institute of National Importance by the Act of Parliament)
            </p>
          </div>
        </div>
        <button
          onClick={handleClick}
          className="bg-gray-500 hover:bg-gray-600 py-2 px-4 rounded flex items-center"
        >
          Logout <LogoutIcon className="ml-2" />
        </button>
      </header>

      <div className="p-8 bg-white shadow mt-8 mx-4">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Admission Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              onChange={handleChange}
              value={form.Name}
              name="Name"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Full Name*"
              required
            />
            <input
              onChange={handleChange}
              value={form.registrationNumber}
              name="registrationNumber"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="JEE/GATE/JAM Registration Number*"
              required
            />
            <input
              onChange={handleChange}
              value={form.score}
              name="score"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="JEE/GATE/JAM Score*"
              required
            />
            <input
              onChange={handleChange}
              value={form.aadhaar}
              name="aadhaar"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Aadhaar Card Number*"
              required
            />

            <input
              onChange={handleChange}
              value={form.religion}
              name="religion"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Religion*"
              required
            />
            <input
              onChange={handleChange}
              value={form.category}
              name="category"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Category*"
              required
            />
            <input
              onChange={handleChange}
              value={form.class12Percentage}
              name="class12Percentage"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Class 12 %*"
              required
            />
            <input
              onChange={handleChange}
              value={form.class10Percentage}
              name="class10Percentage"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Class 10 %*"
              required
            />
          </div>
          <div className="my-2 w-1/2 lg:w-1/4 content-center">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-blue-700 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline text-center"
            >
              Submit Data
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
