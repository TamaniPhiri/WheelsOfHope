import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
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
      <li className="list-none gap-4 lg:flex hidden">
        <Link
          to={"/"}
          className=" hover:text-[#ff6600] text-gray-700 duration-200"
        >
          HOME
        </Link>
        <Link
          to={"/about"}
          className=" hover:text-[#ff6600] text-gray-700 duration-200"
        >
          ABOUT
        </Link>
        <Link
          to={"/services"}
          className=" hover:text-[#ff6600] text-gray-700 duration-200"
        >
          RESOURCES
        </Link>
        <Link
          to={"/blog"}
          className=" hover:text-[#ff6600] text-gray-700 duration-200"
        >
          GET-INVOLVED
        </Link>
        <Link
          to={"/services"}
          className=" hover:text-[#ff6600] text-gray-700 duration-200"
        >
          SUPPORT
        </Link>
        <Link
          to={"/services"}
          className=" hover:text-[#ff6600] text-gray-700 duration-200"
        >
          NEWS
        </Link>
        <Link
          to={"/services"}
          className=" hover:text-[#ff6600] text-gray-700 duration-200"
        >
          CONTACT-US
        </Link>
      </li>
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
          <div className=" text-center flex flex-col mt-20 gap-2">
            <Link
              to={"/"}
              className=" hover:text-[#ff6600] text-gray-700 duration-200"
            >
              HOME
            </Link>
            <Link
              to={"/about"}
              className=" hover:text-[#ff6600] text-gray-700 duration-200"
            >
              ABOUT
            </Link>
            <Link
              to={"/services"}
              className=" hover:text-[#ff6600] text-gray-700 duration-200"
            >
              RESOURCES
            </Link>
            <Link
              to={"/blog"}
              className=" hover:text-[#ff6600] text-gray-700 duration-200"
            >
              GET-INVOLVED
            </Link>
            <Link
              to={"/services"}
              className=" hover:text-[#ff6600] text-gray-700 duration-200"
            >
              SUPPORT
            </Link>
            <Link
              to={"/services"}
              className=" hover:text-[#ff6600] text-gray-700 duration-200"
            >
              NEWS
            </Link>
            <Link
              to={"/services"}
              className=" hover:text-[#ff6600] text-gray-700 duration-200"
            >
              CONTACT-US
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
