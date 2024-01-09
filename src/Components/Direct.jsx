import React from "react";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagram,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const socialMediaLinks = [
  {
    icon: <FaFacebookSquare className="text-green-800" />,
    text: "Facebook",
    link: "https://facebook.com/",
  },
  {
    icon: <FaInstagram className="text-green-800" />,
    text: "Instagram",
    link: "https://instagram.com/",
  },
  {
    icon: <FaTwitter className="text-green-800" />,
    text: "Twitter",
    link: "https://twitter.com/",
  },
];

const Direct = () => {
  return (
    <div className="container mx-auto lg:p-3">
      <div className="mb-6">
        <h2 className="text-2xl mb-2">Or call us directly</h2>
        <p className="text-gray-600 text-sm tracking-wide">
          We appreciate each customer, and we are proud that 60% of clients come
          back to work with us again.
        </p>
      </div>

      <div className="mb-10">
        <p className="text-md flex gap-2 items-center mb-2">
          <FaPhone className="text-green-800 text-center" />
          <span>+234 907 726 3621</span>
        </p>
        <p className="text-md flex gap-2 items-center">
          <FaEnvelope className="text-green-800" />
          <span>info@Rscol.com</span>
        </p>
      </div>

      <div>
        <h3 className="text-2xl mb-3">We are on Socials</h3>
        {socialMediaLinks.map((socialMedia, index) => (
          <p key={index} className="text-md flex gap-2 items-center mb-2">
            {socialMedia.icon}
            <a
              href={socialMedia.link}
              className="text-green-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              {socialMedia.text}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Direct;
