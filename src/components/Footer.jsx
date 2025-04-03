import React from "react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className=" text-white ">
      {/* Footer Bottom Section */}
      <div className="footer-bottom text-center border-t border-gray-600 mt-8 pt-4 flex flex-col md:flex-row items-center justify-center gap-x-8 px-3 relative">
        <p className="text-[12px] mb-1 md:mb-0 lg:text-[14px]">
          &copy; {new Date().getFullYear()} Emblic Institute of Technology. All
          Rights Reserved | Powered by Emblic Technologies.
        </p>
        <div className="flex space-x-4 lg:absolute lg:right-8">
          <a
            href="https://www.facebook.com/emblictech"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/emblictech?igsh=dnlqcHgxbWFhcjM4"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/emblic-technologies1/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://x.com/emblictech?s=21&t=JPj8OlslLYqm6fl4yzuJzQ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
