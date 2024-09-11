import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import axios from "axios";

export default function Course({ Session, setSession }) {
  const navigate = useNavigate();

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
  // Fetch bca Students
  const getBtechUser = () => {
    axios
      .get("https://campus-connect-server-flame.vercel.app/getBtechUser")
      .then((response) => {
        setuserBtech(response.data);
      })
      .catch((err) => console.log("Error fetching users:", err));
  };
  // Fetch bcom Students
  const getMtechUser = () => {
    axios
      .get("https://campus-connect-server-flame.vercel.app/getMtechUser")
      .then((response) => {
        setuserMtech(response.data);
      })
      .catch((err) => console.log("Error fetching users:", err));
  };
  // Fetch bba Students
  const getMbaUser = () => {
    axios
      .get("https://campus-connect-server-flame.vercel.app/getMbaUser")
      .then((response) => {
        setuserMba(response.data);
      })
      .catch((err) => console.log("Error fetching users:", err));
  };

  // get all data function call
  useEffect(() => {
    getAllUser();
    getBtechUser();
    getMtechUser();
    getMbaUser();
  }, []);

  // count all students
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
    <div>
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 mb-5">
            <h1 className="text-3xl font-bold mb-10">Students Status</h1>
            <div className="flex items-center justify-between">
              <div className="flex items-stretch">
                <div className="text-gray-500 text-xl">
                  Total Student connected
                  <CountUp
                    start={0}
                    end={lenAll}
                    duration={2.75}
                    separator=","
                    decimals={0}
                    decimal=","
                    prefix=""
                    suffix=""
                    onEnd={() => console.log("Ended! 👏")}
                    onStart={() => console.log("Started! 💨")}
                  >
                    {({ countUpRef, start }) => (
                      <div>
                        <span
                          className="font-bold  text-gray-500"
                          ref={countUpRef}
                        />
                      </div>
                    )}
                  </CountUp>
                </div>
                <div className="h-100 border-l mx-4"></div>
                <div className="flex flex-nowrap -space-x-3"></div>
              </div>
            </div>

            <hr className="my-10" />

            <div className="grid grid-cols-2 gap-x-20">
              <div>
                <h2 className="text-2xl font-bold mb-4">Status</h2>

                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <div className="p-4 bg-green-100 rounded-xl">
                      <div className="font-bold text-xl leading-none">
                        B.Tech
                      </div>
                      <div className="mt-2 ">
                        <CountUp
                          start={0}
                          end={lenBtech}
                          duration={2.75}
                          separator=","
                          decimals={0}
                          decimal=","
                          prefix=""
                          suffix=" Students"
                          onEnd={() => console.log("Ended! 👏")}
                          onStart={() => console.log("Started! 💨")}
                        >
                          {({ countUpRef, start }) => (
                            <div>
                              <span
                                className="font-bold text-gray-500"
                                ref={countUpRef}
                              />
                            </div>
                          )}
                        </CountUp>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 col-span-2 bg-blue-100 rounded-xl text-gray-800">
                    <div className="font-bold text-xl leading-none">M.Tech</div>
                    <div className="mt-2">
                      <CountUp
                        start={0}
                        end={lenMtech}
                        duration={2.75}
                        separator=","
                        decimals={0}
                        decimal=","
                        prefix=""
                        suffix=" Students"
                        onEnd={() => console.log("Ended! 👏")}
                        onStart={() => console.log("Started! 💨")}
                      >
                        {({ countUpRef, start }) => (
                          <div>
                            <span
                              className="font-bold text-gray-500"
                              ref={countUpRef}
                            />
                          </div>
                        )}
                      </CountUp>
                    </div>
                  </div>

                  <div className="col-span-2">
                    <div className="p-4 bg-blue-100 rounded-xl text-gray-800">
                      <div className="font-bold text-xl leading-none">Mba</div>
                      <div className="mt-2">
                        <CountUp
                          start={0}
                          end={lenMba}
                          duration={2.75}
                          separator=","
                          decimals={0}
                          decimal=","
                          prefix=""
                          suffix=" Students"
                          onEnd={() => console.log("Ended! 👏")}
                          onStart={() => console.log("Started! 💨")}
                        >
                          {({ countUpRef, start }) => (
                            <div>
                              <span
                                className="font-bold text-gray-500"
                                ref={countUpRef}
                              />
                            </div>
                          )}
                        </CountUp>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
