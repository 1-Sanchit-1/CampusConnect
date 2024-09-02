import React, { useEffect } from "react";
import logo from "../image/logo.png";
import { Link, useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ChecklistIcon from "@mui/icons-material/Checklist";
import ContactPageIcon from "@mui/icons-material/ContactPage";
export default function Navbar({ Session, setSession }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (window.confirm("Are you want to Logout!")) {
      setSession(0);
      navigate("/");
    }
  };

  return (
    <>
      <div className=" bg-gray-100 font-sans w-full  m-0">
        <div className="bg-white shadow">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              <div>
                <Link to="/" className="mr-4 flex items-center justify-center">
                  <img src={logo} alt="Apex College Logo" width="50"></img>
                  <h1 className="text-gray-800 font-extrabold mx-2 text-2xl hover:text-blue-600 mr-4 flex items-center justify-center">
                    IIIT Lucknow
                  </h1>
                </Link>
              </div>

              <div className="hidden  sm:flex sm:items-center ">
                <Link
                  to="/"
                  className="text-gray-800 text-sm font-semibold hover:text-blue-600 mr-4 flex items-center justify-center"
                >
                  <HomeIcon />
                  Home
                </Link>

                <Link
                  to="/Courses"
                  className="text-gray-800 text-sm font-semibold hover:text-blue-600 mr-4 flex items-center justify-center"
                >
                  <ChecklistIcon />
                  Courses
                </Link>

                <Link
                  to="/Contact"
                  className="text-gray-800 text-sm font-semibold hover:text-blue-600 flex items-center justify-center"
                >
                  <ContactPageIcon />
                  Contact Us
                </Link>

                <Link
                  to="/About"
                  className="text-gray-800 text-sm font-semibold hover:text-blue-600 ml-4 flex items-center justify-center"
                >
                  <InfoIcon />
                  About Us
                </Link>
              </div>

              <div className="hidden sm:flex sm:items-center">
                {Session === 0 ? (
                  <Link
                    to="/Sign"
                    className="text-gray-800 text-sm font-semibold hover:text-blue-600 mr-4"
                  >
                    Login
                    <LoginIcon />
                  </Link>
                ) : (
                  <Link
                    onClick={handleClick}
                    to=""
                    className="text-gray-800 text-sm font-semibold hover:text-blue-600 mr-4"
                  >
                    Logout <LogoutIcon />
                  </Link>
                )}
              </div>
            </div>

            <span className="flex sm:hidden bg-white border-t-2 py-2">
              <div className="flex justify-between align-items-center w-[100%]">
                <Link
                  to="/"
                  className="text-gray-800 text-sm font-semibold hover:text-blue-600 mr-4 flex items-center justify-center"
                >
                  <HomeIcon />
                </Link>
                <Link
                  to="/About"
                  className="text-gray-800 text-sm px-2 font-semibold hover:text-blue-600 mr-4 flex items-center justify-center"
                >
                  <InfoIcon />
                </Link>
                <Link
                  to="/Courses"
                  className="text-gray-800 text-sm px-2  font-semibold hover:text-blue-600 mr-4 flex items-center justify-center"
                >
                  <ChecklistIcon />
                </Link>
                <Link
                  to="/Contact"
                  className="text-gray-800 text-sm px-2  font-semibold hover:text-blue-600 flex items-center justify-center"
                >
                  <ContactPageIcon />{" "}
                </Link>
                {Session === 0 ? (
                  <Link
                    to="/Sign"
                    className="text-gray-800 text-sm font-semibold hover:text-blue-600 mr-4"
                  >
                    <LoginIcon />
                  </Link>
                ) : (
                  <Link
                    onClick={handleClick}
                    to=""
                    className="text-gray-800 text-sm font-semibold hover:text-blue-600 mr-4"
                  >
                    <LogoutIcon />
                  </Link>
                )}
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
