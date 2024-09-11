import img1 from "../image/logo.png";
import btechimg from "../image/Courses/Computer login.gif";
import mtechimg from "../image/Courses/Spreadsheets.gif";
import mbaimg from "../image/Courses/Business ethics.gif";
import Button from "@mui/material/Button";
import "./css/Home.css";

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import axios from "axios";
import { TypeAnimation } from "react-type-animation";
import Courses from "./Courses";
import About from "./About";

export default function Home() {
  const [user, setUser] = useState([]);
  const [userBtech, setuserBtech] = useState([]);
  const [userMtech, setuserMtech] = useState([]);
  const [userMba, setuserMba] = useState([]);

  // Fetch all Students
  const getAllUser = () => {
    axios
      .get("https://campus-connect-server-flame.vercel.app/getUser")
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => console.log("Error fetching users:", err));
  };
  // Fetch getBtechUser Students
  const getBtechUser = () => {
    axios
      .get("https://campus-connect-server-flame.vercel.app/getBtechUser")
      .then((response) => {
        setuserBtech(response.data);
      })
      .catch((err) => console.log("Error fetching users:", err));
  };
  // Fetch getMtechUser Students
  const getMtechUser = () => {
    axios
      .get("https://campus-connect-server-flame.vercel.app/getMtechUser")
      .then((response) => {
        setuserMtech(response.data);
      })
      .catch((err) => console.log("Error fetching users:", err));
  };
  const getMbaUser = () => {
    axios
      .get("https://campus-connect-server-flame.vercel.app/getMbaUser")
      .then((response) => {
        setuserMba(response.data);
      })
      .catch((err) => console.log("Error fetching users:", err));
  };

  useEffect(() => {
    getAllUser();
    getBtechUser();
    getMtechUser();
    getMbaUser();
  }, []);

  if (user.length > 0) {
    var lenAll = user.length;
  } else {
    lenAll = 0;
  }
  if (userBtech.length > 0) {
    var lenBtech = userBtech.length;
  } else {
    lenBtech = 0;
  }
  if (userMtech.length > 0) {
    var lenMtech = userMtech.length;
  } else {
    lenMtech = 0;
  }
  if (userMba.length > 0) {
    var lenMba = userMba.length;
  } else {
    lenMba = 0;
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center py-4 bg-white-100">
        <div className="text-center text-gray-700">
          <p className="text-2xl font-bold">
            <marquee direction="left">
              {" "}
              Indian Institute of Information Technology, Lucknow
            </marquee>
          </p>
          <p className="text-xl font-semibold mt-2">
            <marquee direction="right">
              {" "}
              भारतीय सूचना प्रौद्योगिकी संस्थान, लखनऊ
            </marquee>
          </p>
        </div>
      </div>{" "}
      <section className="min-h-screen  bg-white flex md:flex-row flex-col w-screen gap-2 mx-auto">
        <div className=" bg-white  mx-10 my-auto flex-d align-middle justify-center sm:w-[40%]">
          <div className="">
            <h1 className="mt-5 text-4xl sm:text-8xl">
              <strong>
                Want to <span className="text-blue-500 font-bold">learn</span>
              </strong>
            </h1>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Learn?",
                1000,
                "Coding ?",
                1000,
                "C++ ?",
                1000,
                "Java ?",
                1000,
                "Python ?",
                1000,
              ]}
              speed={50}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
            <h5 className="display-6" style={{ fontSize: "2em" }}>
              We make programming simple & easy to understand.
            </h5>
            <Link to="/Login" className="">
              <Button className="my-5 bg-blue-700" variant="contained">
                Join US
              </Button>
            </Link>
          </div>
        </div>
        <div className="bg-white sm:w-[60%] px-5">
          <img
            src={img1}
            alt="Login Images"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </section>
      <div className=" bg-gray-100 flex flex-col items-center py-10 ">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 ">
          <marquee direction="left">
            {" "}
            Indian Institute of Information Technology, Lucknow
          </marquee>
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 sm:w-3/4 w-full max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Campus Connect
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            The Campus Connect is an admission management platform tailored
            specifically for students enrolled in B.Tech, M.Tech, and MBA
            programs. This platform streamlines the admission process, provides
            administrative control, and ensures secure communication between
            students and administrators.
          </p>
        </div>

        <div className="mt-10">
          <button className="px-8 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-500 transition duration-300">
            <Link to="/Login" className="">
              Explore Admissions
            </Link>
          </button>
        </div>
      </div>
      <div
        id="csvbg"
        className="h-[130vh]  sm:h-[35vh] bg-cover bg-center grid grid-flow-row  sm:flex gap-5 align-middle justify-around"
      >
        <div className="my-auto">
          <div className="transform hover:text-white hover:scale-105 transition duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-13 sm:w-40 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
              />
            </svg>{" "}
          </div>
          <CountUp
            start={0}
            end={lenBtech}
            duration={2.75}
            separator=","
            decimals={0}
            decimal=","
            prefix="B.Tech : "
            suffix=" Students"
            onEnd={() => console.log("Ended! 👏")}
            onStart={() => console.log("Started! 💨")}
          >
            {({ countUpRef, start }) => (
              <div>
                <span className="font-bold text-white" ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </div>
        <div className="my-auto">
          <div className="transform hover:text-white  hover:scale-105 transition duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-13 sm:w-40"
            >
              <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <CountUp
            start={0}
            end={lenMtech}
            duration={2.75}
            separator=","
            decimals={0}
            decimal=","
            prefix="M.Tech : "
            suffix=" Students"
          >
            {({ countUpRef, start }) => (
              <div>
                <span className="font-bold text-white" ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </div>
        <div className="my-auto">
          <div className="transform hover:text-white  hover:scale-105 transition duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-13  sm:w-40"
            >
              <path
                fillRule="evenodd"
                d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
              <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
            </svg>
          </div>
          <CountUp
            start={0}
            end={lenMba}
            duration={2.75}
            separator=","
            decimals={0}
            decimal=","
            prefix="MBA : "
            suffix=" Students"
            onEnd={() => console.log("Ended! 👏")}
            onStart={() => console.log("Started! 💨")}
          >
            {({ countUpRef, start }) => (
              <div>
                <span className="font-bold text-white" ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </div>
        <div className="my-auto">
          <div className="transform hover:text-white  hover:scale-105 transition duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-13 sm:w-40"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.547 4.505a8.25 8.25 0 1011.672 8.214l-.46-.46a2.252 2.252 0 01-.422-.586l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 01-1.384-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.279-2.132z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <CountUp
            start={0}
            end={lenAll}
            duration={2.75}
            separator=","
            decimals={0}
            decimal=","
            prefix="Total : "
            suffix=" Students"
            onEnd={() => console.log("Ended! 👏")}
            onStart={() => console.log("Started! 💨")}
          >
            {({ countUpRef, start }) => (
              <div>
                <span className="font-bold text-white" ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </div>
      </div>
      <Courses />
      <About />
    </>
  );
}
