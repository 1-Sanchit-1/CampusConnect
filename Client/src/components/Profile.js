import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../image/logo.png";

export default function Profile({ Session, userData, setSession }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    registrationNumber: "",
    score: "",
    aadhaar: "",
    fatherName: "",
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
      const response = await fetch(
        "https://campus-connect-server-flame.vercel.app/api/admissionform",
        {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
          method: "POST",
        }
      );

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
        registrationNumber: "",
        score: "",
        aadhaar: "",
        fatherName: "",
        religion: "",
        category: "",
        class12Percentage: "",
        class10Percentage: "",
      });
    }
  };

  const handleClick = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      setSession(0);
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
            <h1 className="text-2xl font-semibold">Welcome to IIIT Lucknow</h1>
            <h2 className="text-lg">
              {userData.fname} {userData.lname}
            </h2>
            <p>{userData.course}</p>
          </div>
        </div>
        <button
          onClick={handleClick}
          className="bg-gray-500 hover:bg-gray-600 py-2 px-4 rounded flex items-center"
        >
          Logout <LogoutIcon className="ml-2" />
        </button>
      </header>

      {/* Data Submission Form */}
      <div className="p-8 bg-white shadow mt-8 mx-4">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Admission Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
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
              value={form.fatherName}
              name="fatherName"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Father's Name*"
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
