import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-700 text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* IIIT LUCKNOW Section */}
          <div className="footer-items">
            <h1 className="text-2xl font-bold">IIIT LUCKNOW</h1>
            <p className="mt-2">
              Empowering Excellence in Technology and Education
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-items">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <div className="h-1 w-20 bg-blue-500 my-2"></div>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/Courses" className="hover:text-blue-500">
                  Courses
                </a>
              </li>
              <li>
                <a href="/Contact" className="hover:text-blue-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-500">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="footer-items">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="h-1 w-20 bg-blue-500 my-2"></div>
            <ul className="space-y-2">
              <li>
                <i className="fa fa-map-marker mr-2"></i>S@N, Dev
              </li>
              <li>
                <i className="fa fa-phone mr-2"></i>1020304050
              </li>
              <li>
                <i className="fa fa-envelope mr-2"></i>sanchitguptaghj@gmail.com
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-blue-500">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="hover:text-blue-500">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="hover:text-blue-500">
                <i className="fab fa-google-plus-square text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 py-4 text-center">
        <p>Copyright &copy; 2024 S@N . All rights reserved</p>
      </div>
    </div>
  );
}
