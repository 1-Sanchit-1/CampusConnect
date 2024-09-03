import { Link, useNavigate } from "react-router-dom";
import { React, useState } from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://campus-connect-server-flame.vercel.app/api/contactus",
        {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
          method: "POST",
        }
      );

      const data = await response.json();
      const { fname, status } = data;
      console.log(fname, status);
      if (status) {
        Swal.fire({
          icon: "success",
          title: `Message Sent Successfully.`,
          text: `Sent by ${fname}.`,
        });
        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong!",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Failed to send message. Please try again later.",
      });
    } finally {
      setForm({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <>
      <div className="container mx-auto my-4 px-4 lg:px-20">
        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div className="flex">
            <h1 className="font-bold uppercase text-2xl sm:text-5xl content-center">
              Send us a <br /> message
            </h1>
          </div>
          <form className="" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                onChange={handleChange}
                value={form.fname} // Bind input to form state
                name="fname"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
                required
              />
              <input
                onChange={handleChange}
                value={form.lname} // Bind input to form state
                name="lname"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
                required
              />
              <input
                onChange={handleChange}
                value={form.email} // Bind input to form state
                name="email"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
                required
              />
              <input
                onChange={handleChange}
                value={form.phone}
                name="phone"
                className="border border-1 border-black w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="phone"
                maxLength="10"
                minLength="10"
                placeholder="Phone*"
                required
              />
            </div>
            <div className="my-4">
              <textarea
                onChange={handleChange}
                value={form.message}
                name="message"
                placeholder="Message*"
                required
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4 content-center">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-blue-700 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline text-center"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
