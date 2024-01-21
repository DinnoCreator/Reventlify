import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [colorChange, setColorChange] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const changeNavbarColor = () => {
    if (window.scrollY >= 95) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div
      className=" fixed left-0 right-0 top-0"
      style={
        colorChange && isOpen === false
          ? { opacity: 0.5, backgroundColor: "#000000e8" }
          : isOpen
          ? { opacity: 99, backgroundColor: "#1F2937" }
          : { height: "auto" }
      }
    >
      <nav className="eddyContainer px-3 md:px-0 py-4 md:py-6 md:flex md:justify-between md:items-center">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo or Brand */}
          <div className="text-white font-bold text-lg italic">Reventlify</div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Navigation Links */}
        <div className={`md:flex ${isOpen ? "block" : "hidden"}`}>
          <div className="block mt-4 md:mt-0 md:inline-block text-white mr-8">
            <NavLink
              to="/"
              className="nav-link onPhoneNav"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#f5167e",
                    }
                  : { color: "white" }
              }
            >
              Home
            </NavLink>
          </div>
          <div className="block mt-4 md:mt-0 md:inline-block text-white mr-8">
            <NavLink
              to="/about"
              className="nav-link onPhoneNav"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#f5167e",
                    }
                  : { color: "white" }
              }
            >
              About
            </NavLink>
          </div>
          <div className="block mt-4 md:mt-0 md:inline-block text-white mr-8">
            <NavLink
              to="/services"
              className="nav-link onPhoneNav"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#f5167e",
                    }
                  : { color: "white" }
              }
            >
              Services
            </NavLink>
          </div>
          <div className="block mt-4 md:mt-0 md:inline-block text-white mr-8">
            <NavLink
              to="/contact"
              className="nav-link onPhoneNav"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#f5167e",
                    }
                  : { color: "white" }
              }
            >
              Contact
            </NavLink>
          </div>
          <div className="block mt-4 md:mt-0 md:inline-block text-white mr-8">
            <div
              // type="button"
              className="cursor-pointer w-fit hover:text-[#f5167e] px-4 py-[0.1rem] rounded-[40px] border-solid hover:border-[#f5167e] border-white border-2"
            >
              Login
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
