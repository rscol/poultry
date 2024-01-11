import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 RsCol Generator. All rights reserved.</p>
          </div>
          <div>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <li>
                <a href="/" className="hover:text-gray-500 lg:text-base text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-500 lg:text-base text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-500 text-sm lg:text-base">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
