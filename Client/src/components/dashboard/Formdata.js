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
      .get(
        "https://campus-connect-server-flame.vercel.app/getadmissionformdata"
      )
      .then((response) => {
        setUser(response.data);
        setSearchResults(response.data);
      })
      .catch((err) => console.log("Error fetching messages:", err));
  };

  const handleSearch = (e) => {
    const key = e.target.value;
    setSearchKey(key);

    // Convert key to lower case for case-insensitive search
    const lowerCaseKey = key.toLowerCase();

    // Filter users based on the registration number
    const filteredUsers = user.filter((user) => {
      // Check if user.registrationNumber is defined and perform the search
      const registrationNumber = user.registrationNumber
        ? user.registrationNumber.toLowerCase()
        : "";
      return registrationNumber.includes(lowerCaseKey);
    });

    setSearchResults(filteredUsers);
  };

  // count messages
  if (user.length > 0) {
    var len = user.length;
  } else {
    len = "No Form data Exist";
  }

  // delete
  const deleteEmp = (registrationNumber) => {
    Swal.fire({
      title: `Are you sure you want to delete ${registrationNumber}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          "https://campus-connect-server-flame.vercel.app/admissionformdelete",
          {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              registrationNumber: registrationNumber,
            }),
          }
        )
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
                <b>Form Data</b>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="input-group mb-3 col-md-4 ">
              <input
                type="text"
                className="w-full  pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                placeholder="Search by Registration Number"
                value={searchKey}
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-sm-6 ">
              <h2 className="my-3">
                <b>Total Forms : {len}</b>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="table-responsive">
              <table className="table table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Registration Number</th>
                    <th>Score</th>
                    <th>Aadhaar</th>
                    <th>Father's Name</th>
                    <th>Religion</th>
                    <th>Category</th>
                    <th>Class 12 Percentage</th>
                    <th>Class 10 Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResults.length > 0 ? (
                    searchResults.map((usr) => (
                      <tr key="{usr.id}">
                        <td>{usr.Name}</td>
                        <td>{usr.registrationNumber}</td>
                        <td>{usr.score}</td>
                        <td>{usr.aadhaar}</td>
                        <td>{usr.religion}</td>
                        <td>{usr.category}</td>
                        <td>{usr.class12Percentage}</td>
                        <td>{usr.class10Percentage}</td>
                        <td class=" flex justify-center">
                          <button
                            onClick={() => deleteEmp(usr.registrationNumber)}
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
