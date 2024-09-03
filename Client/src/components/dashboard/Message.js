import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Message() {
  const [user, setUser] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    getAllUser();
  }, []);

  // Fetch all Students
  const getAllUser = () => {
    axios
      .get("https://campus-connect-server-flame.vercel.app/getUserMsg")
      .then((response) => {
        setUser(response.data);
        setSearchResults(response.data);
      })
      .catch((err) => console.log("Error fetching messages:", err));
  };

  // search
  const handleSearch = (e) => {
    const key = e.target.value;
    setSearchKey(key);

    const filteredUsers = user.filter((user) =>
      user.fname.toLowerCase().includes(key.toLowerCase())
    );
    setSearchResults(filteredUsers);
  };

  // count messages
  if (user.length > 0) {
    var len = user.length;
  } else {
    len = "No Message Exist";
  }

  // delete all data
  const deleteall = () => {
    let cnf = prompt("Please enter admin password!");

    if (cnf === "admin123") {
      Swal.fire({
        title: `Are you sure you want to delete all messages ?`,
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch("https://campus-connect-server-flame.vercel.app/msgdeleteall", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              Swal.fire("Deleted!", "All Messages", "success");
              getAllUser();
            })
            .catch((error) => {
              console.error("Error deleting messages:", error);
            });
        }
      });
    } else {
      alert("Wrong password!");
    }
  };

  // delete
  const deleteEmp = (email) => {
    Swal.fire({
      title: `Are you sure you want to delete ${email}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("https://campus-connect-server-flame.vercel.app/msgdelete", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            email: email,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Deleted!", data.data, "success");
            getAllUser();
          })
          .catch((error) => {
            console.error("Error deleting messages:", error);
          });
      }
    });
  };

  return (
    <>
      <div className="container">
        <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
          <div className="row justify-content-center align-items-center">
            <div className="col-sm-12 text-center">
              <h2 className="my-3">
                <b>Visitor's Messages</b>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="input-group mb-3 col-md-4 ">
              <input
                type="text"
                className="w-full  pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                placeholder="Search by Name"
                value={searchKey}
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-sm-6 ">
              <h2 className="my-3">
                <b>Total Messages : {len}</b>
              </h2>
            </div>
            <div className="col-sm-6 flex justify-end ">
              <button
                onClick={() => deleteall()}
                type="button"
                class="mr-3 text-sm py-1 px-2 flex justify-center align-middle   bg-red-700 hover:bg-red-500 text-white  rounded focus:outline-none focus:shadow-outline"
              >
                Delete All Messages &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 font-extrabold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="table-responsive">
              <table className="table table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Message</th>
                    <th>Operations</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResults.length > 0 ? (
                    searchResults.map((usr) => (
                      <tr key="{usr.id}">
                        <td>{usr.fname}</td>
                        <td>{usr.lname}</td>
                        <td>{usr.email}</td>
                        <td>{usr.phone}</td>
                        <td>{usr.message.substring(0, 200)}</td>
                        <td class=" flex justify-center">
                          <button
                            onClick={() => deleteEmp(usr.email)}
                            type="button"
                            class="text-sm  py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6 text-red-500 hover:text-red-700"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="10" className="text-center">
                        No matching records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
