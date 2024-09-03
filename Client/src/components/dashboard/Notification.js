import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import user from "../../image/user.png";
import { UserIcon } from "@heroicons/react/solid";
export default function Notification() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getAllUser();
  }, []);

  let str = "https://source.unsplash.com/250x250/?profile";
  // Fetch all Students
  const getAllUser = () => {
    axios
      .get("https://campus-connect-server-flame.vercel.app/getUserMsgNoti")
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => console.log("Error fetching messages:", err));
  };
  return (
    <>
      <div class="max-w-lg mx-auto items-center h-full overflow-hidden">
        {user.length > 0 ? (
          user.map((usr) => (
            <div class="flex justify-between px-3 py-1 bg-white items-center gap-1 rounded-lg border border-gray-100 my-3">
              <div className="relative z-0 w-16 h-16 rounded-full hover:bg-red-700 bg-gradient-to-r from-purple-400 via-blue-500 to-red-400">
                <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center">
                  {/* <UserIcon className="w-8 h-8 text-gray-500" /> */}
                </div>
              </div>
              <div>
                <span class="font-mono">{usr.message.substring(0, 200)}</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </div>
            </div>
          ))
        ) : (
          <div class="flex justify-between px-3 py-1 bg-white items-center gap-1 rounded-lg border border-gray-100 my-3">
            <div class="relative w-16 h-16 rounded-full hover:bg-red-700 bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gray-200 rounded-full border-2 border-white">
                <img
                  class="w-full h-full object-cover rounded-full"
                  src="https://source.unsplash.com/1600x900/?notification,alert"
                  alt=""
                />
              </div>
            </div>
            <div>
              <span class="font-mono">No Notification Found</span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
