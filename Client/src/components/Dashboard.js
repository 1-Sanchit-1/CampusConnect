import React, { useEffect, useState } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import "../components/css/Dashboard.css";
import logo from "../image/logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Course from "./dashboard/Course";

export default function Dashboard({ Session, setSession }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (window.confirm("Are you want to Logout!")) {
      setSession(0);
      navigate("/");
    }
  };

  return (
    <>
      <div className="relative bg-blue-50 overflow-hidden max-h-screen">
        <header className="fixed   right-0 top-0 left-60 bg-blue-50 py-3 px-4 h-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <div></div>
              <div className="text-lg font-bold">Admin Panel</div>
              <div></div>
            </div>
          </div>
        </header>

        <aside className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
          <div className="flex flex-col justify-between h-full">
            <div className="flex-grow">
              <div className="px-4 py-6 text-center border-b">
                <div className="flex flex-col items-center justify-between py-4">
                  <img src={logo} alt="Apex College Logo" width="50"></img>
                  <h1 className=" rounded-xl  text-black-700 hover:text-blue-900 font-extrabold mx-2 text-2xl mr-4 flex items-center justify-center">
                    IIIT Lucknow
                  </h1>
                </div>
              </div>
              <div className="p-4">
                <ul className="space-y-1">
                  <li>
                    <Link
                      to="/Dashboard/"
                      className="flex items-center  rounded-xl font-bold text-sm text-gray-900 py-3 px-4"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                        />
                      </svg>
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Dashboard/Student"
                      className="flex bg-white hover:bg-blue-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                        />
                      </svg>
                      Students
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Dashboard/Message"
                      className="flex bg-white hover:bg-blue-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                        />
                      </svg>
                      Messages
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Dashboard/Notification"
                      className="flex bg-white hover:bg-blue-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                        />
                      </svg>
                      Notifications
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-4">
              <button
                onClick={handleClick}
                type="button"
                className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
              >
                Logout &nbsp; <LogoutIcon />
              </button>{" "}
            </div>
          </div>
        </aside>

        <main className="ml-60 pt-16 min-h-screen max-h-screen overflow-auto">
          <Outlet />
        </main>
      </div>
    </>
  );
}
