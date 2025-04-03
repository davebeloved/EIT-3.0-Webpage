import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Logo2 from "../assets/footer.png";
import { navLinks } from "../data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = ({ navScroll }) => {
  const [show, setShow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const handleClickForEit2025 = () => {
    if (pathname !== "/eit2025") {
      navigate("/eit2025");
    } else {
      navigate("/eit2025/register");
    }
  };
  return (
    <div
      className={` h-20 flex  w-full left-0 top-  right-0 items-center justify-between px-3 md:px-6 lg:px-10 shadow-md py- fixed z-40   ${
        navScroll ? "bg-[#004875] text-white" : "bg-blue-50"
      } transition-all duration-300 ease-in-out`}
    >
      {/* navbar logo  */}
      <div className="lg:w-44 w-32">
        <img
          src={navScroll ? Logo2 : Logo}
          alt=""
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="block lg:hidden">
        {show ? (
          <FaTimes onClick={() => setShow(!show)} className="cursor-pointer" />
        ) : (
          <FaBars onClick={() => setShow(!show)} className="cursor-pointer" />
        )}
      </div>

      {/* nav links mapping  */}
      <ul
        className={`flex absolute -right-8 top-[78px] w-48 lg:w-[520px]
        lg:relative lg:top-0 flex-col lg:flex-row lg:items-center gap-x-10 mr-10 ${
          show ? "menulist" : "hidden lg:flex"
        }`}
      >
        {navLinks?.map((link, i) => {
          const { label, path } = link;
          const activeClassLink = pathname === path;
          return (
            <>
              <li
                className={`list-none font-montserrat text-[16px]  h-full w-full lg:w-fit`}
              >
                <a
                  key={i}
                  onClick={() => setShow(false)}
                  href={path}
                  target="_blank"
                  className={`linkclass  relative bg-[#004875] lg:bg-transparent text-  lg:hover:bg-transparent transition-all ease-in-out duration-300 hover:bg-blue-100 w-full h-full grid p-3 ${
                    isHovered ? "remove-underline" : ""
                  } ${activeClassLink ? "activeLink" : ""} ${
                    navScroll && activeClassLink
                      ? "text-white  linkclass activeLink2  "
                      : navScroll
                      ? "text-white linkclass2"
                      : "lg:text-black text-white"
                  }`}
                >
                  {label}
                </a>
              </li>
            </>
          );
        })}
        <a
          href="https://eit-registration-form-5bn7s6zgg-davebeloveds-projects.vercel.app/"
          target='_blank'
          // onClick={handleClickForEit2025}
          className={`btn-primary bg-[#004875] reg-btn lg:ml-4 pl-3  flex items-center lg:justify-center  text-left lg:text-center hover:opacity-90  font-bold px-4 w-full  lg:w-[170px] ${
            navScroll && "lg:bg-[#fff] lg:text-[#004875] eit-glow-btn"
          } `}
        >
          Register for EIT 3.0
        </a>
      </ul>
    </div>
  );
};

export default NavBar;
