import "../css/Student.css";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Student() {
  const [user, setUser] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [Form, setForm] = useState();

  // get all data function call
  useEffect(() => {
    getAllUser();
  }, []);

  // count students
  if (user.length > 0) {
    var len = user.length;
  } else {
    len = "No Student Exist";
  }

  // edit click event
  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  // add click event
  const handleAddClick = () => {
    setShowAddModal(true);
  };

  // Add_modal close event
  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  // Edit_modal close event
  const handleCloseModal = () => {
    setSelectedEmployee(null);
    setShowModal(false);
  };

  // data entry permission for inputs add modal .

  const handleChangeAdd = (e) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
    console.log(Form);
  };

  // data entry permission for inputs edit modal .
  const handleChange = (e) => {
    setSelectedEmployee({
      ...selectedEmployee,
      [e.target.name]: e.target.value,
    });
  };

  // Fetch all Students
  const getAllUser = () => {
    axios
      .get("https://campus-connect-server-flame.vercel.app/getUser")
      .then((response) => {
        setUser(response.data);
        setSearchResults(response.data);
      })
      .catch((err) => console.log("Error fetching users:", err));
  };

  // search
  const handleSearch = (e) => {
    const key = e.target.value;
    setSearchKey(key);

    const filteredUsers = user.filter((user) =>
      (user.fname || "").toLowerCase().includes(key.toLowerCase())
    );
    setSearchResults(filteredUsers);
  };

  // Add students by admin
  const handleSubmitAdd = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://campus-connect-server-flame.vercel.app/api/adduser",
      {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Form),
        method: "POST",
      }
    );

    const data = await response.json();
    console.log(data);
    const { message, status, fname, course } = data;
    if (status) {
      Swal.fire({
        icon: "success",
        title: `${fname} added successfully`,
        text: `${fname} added by Admin.`,
        confirmButtonText: "Okay",
      });
      handleCloseAddModal();
      setForm({});
      getAllUser();
    } else {
      // alert("Something went wrong!!..");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong!",
      });
    }
  };
  // edit students by admin
  const handleUpdate = () => {
    if (selectedEmployee) {
      const updatedData = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        course: document.getElementById("course").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
      };

      axios
        .post(`https://campus-connect-server-flame.vercel.app/update`, {
          email: updatedData.email,
          fname: updatedData.fname,
          lname: updatedData.lname,
          phone: updatedData.phone,
          course: updatedData.course,
        })
        .then((response) => {
          console.log("Employee updated successfully:", response.data);
          Swal.fire({
            icon: "success",
            title: "Student updated successfully!",
            text: "Student detail's updated by Admin.",
          });
          handleCloseModal();
          getAllUser();
        })
        .catch((error) => {
          console.error("Error updating Student:", error);
        });
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
        fetch("https://campus-connect-server-flame.vercel.app/delete", {
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
            console.error("Error deleting Student:", error);
          });
      }
    });
  };

  return (
    <>
      {/* //main content */}
      <div>
        <div className="container">
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
            <div className="row justify-content-center align-items-center">
              <div className="col-sm-12 text-center">
                <h2 className="my-3">
                  <b>Student's Information</b>
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
            <div className="row">
              <div className="row justify-content-center align-items-center">
                <div className="col-sm-6 ">
                  <h2 className="my-3">
                    <b>Total Students : {len}</b>
                  </h2>
                </div>
                <div className="col-sm-6 flex justify-end ">
                  <button
                    onClick={() => handleAddClick()}
                    type="button"
                    class="mr-3 text-sm py-1 px-2 flex justify-center align-middle   bg-blue-700 hover:bg-blue-500 text-white  rounded focus:outline-none focus:shadow-outline"
                  >
                    Add Student &nbsp;
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
                        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                      />
                    </svg>
                  </button>
                </div>
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
                      <th>Course</th>
                      <th>Join Date</th>
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
                          <td>{usr.course}</td>
                          <td>{usr.date.substring(0, 10)}</td>
                          <td class=" flex justify-end">
                            <button
                              onClick={() => handleEditClick(usr)}
                              type="button"
                              class="mr-3 text-sm py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6  text-blue-500 hover:text-blue-700 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                />
                              </svg>
                            </button>

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
      </div>

      {/* edit modal */}
      <div
        className={`modal ${showModal ? "show" : ""}`}
        tabIndex="-1"
        role="dialog"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header ">
              <h3 className="modal-title">Edit Students Details</h3>
              <Link
                type="Link"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseModal}
              >
                <span aria-hidden="true">&times;</span>
              </Link>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="w-full  pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                    id="email"
                    name="email"
                    disabled
                    value={selectedEmployee?.email || ""}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    className="w-full  pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                    id="fname"
                    name="fname"
                    required
                    onChange={handleChange}
                    value={selectedEmployee?.fname || ""}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    className="w-full  pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                    id="lname"
                    name="lname"
                    required
                    onChange={handleChange}
                    value={selectedEmployee?.lname || ""}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact">Contact</label>
                  <input
                    className="w-full  pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                    id="phone"
                    name="phone"
                    type="phone"
                    maxLength="10"
                    minLength="10"
                    required
                    value={selectedEmployee?.phone || ""}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label for="cars">Choose a course:</label>

                  <select
                    className="w-full  pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                    name="course"
                    id="course"
                    required
                    value={selectedEmployee?.course || ""}
                    onChange={handleChange}
                  >
                    <option value="Others">Others</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="M.Tech">M.Tech</option>
                    <option value="Mba">Mba</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <Link
                type="Link"
                className="hover:bg-blue-800 btn bg-blue-700 text-white"
                onClick={handleUpdate}
              >
                Save changes
              </Link>
              <Link
                type="Link"
                className="hover:bg-gray-800 btn bg-gray-700 text-white"
                data-dismiss="modal"
                onClick={handleCloseModal}
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Add modal */}
      <div
        className={`modal ${showAddModal ? "show" : ""}`}
        tabIndex="-1"
        role="dialog"
        style={{ display: showAddModal ? "block" : "none" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header ">
              <h3 className="modal-title">Add Students </h3>
              <Link
                type="Link"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseAddModal}
              >
                <span aria-hidden="true">&times;</span>
              </Link>
            </div>
            <form onSubmit={handleSubmitAdd}>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    className="w-full  pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                    id="fname"
                    name="fname"
                    placeholder="Enter First Name"
                    onChange={handleChangeAdd}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    className="w-full  pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                    id="lname"
                    name="lname"
                    placeholder="Enter last Name"
                    required
                    onChange={handleChangeAdd}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="w-full  pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    required
                    onChange={handleChangeAdd}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Password</label>
                  <input
                    type="password"
                    className="w-full  pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    required
                    onChange={handleChangeAdd}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact">Contact</label>
                  <input
                    className="w-full  pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                    id="phone"
                    name="phone"
                    type="phone"
                    maxLength="10"
                    minLength="10"
                    placeholder="Enter Contact Number"
                    required
                    onChange={handleChangeAdd}
                  />
                </div>

                <div className="form-group">
                  <label for="browser">Choose a course:</label>
                  <input
                    list="browsers"
                    className="w-full  pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                    name="course"
                    id="browser"
                    required
                    onChange={handleChangeAdd}
                  />

                  <datalist id="browsers">
                    <option value="B.Tech" />
                    <option value="M.Tech" />
                    <option value="Mba" />
                  </datalist>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="hover:bg-blue-800 btn bg-blue-700 text-white"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="hover:bg-gray-800 btn bg-gray-700 text-white"
                  data-dismiss="modal"
                  onClick={handleCloseAddModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
