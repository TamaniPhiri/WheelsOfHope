import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { links } from "../constants/constants";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();
  return (
    <nav
      className={`flex items-center max-w-7xl font-bold shadow-lg border-b top-0 z-50 backdrop-blur w-full justify-between px-4 md:px-12 py-6`}
    >
      <Link to={"/"}>
        <img
          src={logo}
          alt="Logo"
          loading="lazy"
          className=" object-cover w-16 md:w-[4.5rem] h-full hover:rotate-2 duration-200 delay-150"
        />
      </Link>
      <div className="list-none gap-4 lg:flex hidden">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className={`hover:text-[#ff6600] text-gray-700 duration-200 ${
              location.pathname === link.to ? "text-[#ff6600]" : ""
            }`}
          >
            {link.text}
          </Link>
        ))}
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="flex lg:hidden flex-col gap-3"
      >
        <div
          className={`w-8 h-[0.13rem] ${
            open ? "translate-y-[0.44rem] rotate-45" : ""
          } bg-gray-800 duration-300 delay-150`}
        ></div>
        <div
          className={`w-8 h-[0.13rem] ${
            open ? "-translate-y-[0.44rem] -rotate-45" : ""
          } bg-gray-800 duration-300 delay-150`}
        ></div>
      </button>
      <div
        className={`absolute origin-bottom ${
          open ? "left-0" : "-left-full"
        } md:hidden top-[101%] bg-gray-200 border-t-0 max-w-7xl delay-150 duration-300 bg-opacity-[98%] backdrop-blur-md w-full inset-x-0`}
      >
        <div className=" text-2xl flex min-h-screen flex-col h-full w-full gap-4 items-center list-none">
          <div className="text-center flex flex-col mt-20 gap-2">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className={`hover:text-[#ff6600] text-gray-700 duration-200 ${
                  location.pathname === link.to ? "text-[#ff6600]" : ""
                }`}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
