import { useState } from "react";
import logo from "../assets/huddle-logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between px-6 py-4 items-center border-b-2 border-gray-200 relative">
      <Link to="/">
        <div>
          <img src={logo} alt="" />
        </div>
      </Link>
      <img
        src={`${isMenuOpen ? close : menu}`}
        alt=""
        className="flex lg:hidden cursor-pointer h-[3.5rem] w-[3.5rem] object-cover"
        onClick={toggleMenu}
      />
      <div
        className={`${
          isMenuOpen ? "max-h-screen" : "hidden"
        } lg:hidden overflow-hidden transition-max-h duration-500 ease-in-out absolute top-full left-0 w-full bg-white z-10 py-8 px-4 shadow-lg rounded-b-3xl`}
      >
        <ul className="flex flex-col gap-4">
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">What drives us</a>
          </li>
          <li>
            <a href="/">Hudddle Features</a>
          </li>
          <li>
            <a href="/">Product Roadmap</a>
          </li>
          <Link to="/register">
            <button className="bg-[#5C5CE9] text-white h-[52px] w-full p-[8px] rounded-md">
              Join the Waitlist
            </button>
          </Link>
        </ul>
      </div>
      <div className="hidden lg:flex">
        <ul className="flex justify-evenly gap-12">
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="#">What drives us</a>
          </li>
          <li>
            <a href="/">Hudddle Features</a>
          </li>
          <li>
            <a href="/">Product Roadmap</a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex">
        <Link to="/register">
          <button className="bg-[#5C5CE9] text-white h-[52px] w-[177px] p-[8px] rounded-md">
            Join the Waitlist
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;