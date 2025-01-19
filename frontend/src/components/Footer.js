import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 py-10 mt-auto">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Company */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Premium Tools
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Pages */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Pages</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Register
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Add List
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Subscribe */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Subscribe</h3>
            <p className="mt-4 text-sm text-gray-500">
              Get access to subscriber exclusive deals and be the first who gets
              informed about fresh sales.
            </p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="mt-4 flex items-start">
                <input
                  id="agree"
                  type="checkbox"
                  className="h-5 w-5 text-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="agree" className="ml-2 text-sm">
                  I agree with the{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Terms and Conditions
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 text-center text-sm text-gray-500">
          © 2025 Shopwise. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

