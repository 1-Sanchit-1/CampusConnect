import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Registration from "./components/Signup";
import Error_404 from "./components/Error_404";
import Profile from "./components/Profile";
import Forgotpassword from "./components/Forgotpassword";
import Dashboard from "./components/Dashboard";
import Course from "./components/dashboard/Course";
import Notification from "./components/dashboard/Notification";
import Student from "./components/dashboard/Student";
import Message from "./components/dashboard/Message";
import Formdata from "./components/dashboard/Formdata";
import RefrshHandler from "./RefrshHandler";

// Wrapper component for handling Header/Footer logic based on the route
function Layout({ isAuthenticated, setIsAuthenticated }) {
  const location = useLocation();

  // Check if current route is for a private section
  const isPrivateRoute =
    location.pathname.startsWith("/Dashboard") ||
    location.pathname === "/Profile";

  return (
    <>
      {!isPrivateRoute && <Navbar setIsAuthenticated={setIsAuthenticated} />}{" "}
      <div className="Container mx-auto px-auto overflow-x-hidden no-scrollbar bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Forgotpassword" element={<Forgotpassword />} />

          <Route
            path="/Profile"
            element={isAuthenticated ? <Profile /> : <Navigate to="/Login" />}
          />
          <Route
            path="/Dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/Login" />}
          >
            <Route path="/Dashboard/" element={<Course />} />
            <Route path="/Dashboard/Student" element={<Student />} />
            <Route path="/Dashboard/Formdata" element={<Formdata />} />
            <Route path="/Dashboard/Message" element={<Message />} />
            <Route path="/Dashboard/Notification" element={<Notification />} />
          </Route>

          <Route path="*" element={<Error_404 />} />
        </Routes>
      </div>
      {!isPrivateRoute && <Footer />}
    </>
  );
}

function App() {
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <BrowserRouter>
        <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
        <Layout
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          setUserData={setUserData}
          userData={userData}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
