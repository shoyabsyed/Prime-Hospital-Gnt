import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown, IoMdMenu, IoMdRemove } from "react-icons/io";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";

const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const location = useLocation();

  const aboutLinks = ["Chairman", "Hospital", "Doctors Team"];
  const departmentLinks = [
    "General Medicine",
    "Cardiology",
    "Neurosurgery",
    "Pulmonology",
    "Urology",
    "Gynaecology",
    "Pediatrics",
    "ENT",
    "Ophthalmology",
    "Radiology",
    "Orthopedic",
    "Anesthesiology",
    "Cardiothoracic Surgery",
  ];
  const moreLinks = ["Testimonials", "Blog"];

  const renderDropdownLinks = (links) =>
    links.map((link, index) => (
      <li key={index}>
        <Link to="#" className="block px-4 py-2 hover:text-sky-500">
          <IoMdRemove className="inline-block mr-2 md:hidden" />
          {link}
        </Link>
      </li>
    ));

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(location.pathname);
  return (
    <header
      className={`bg-white sticky top-0 w-full shadow-md transition-transform duration-300 z-50 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-4 lg:px-8">
        <img src="Images/logo.png" alt="logo-img" className="w-24 h-auto" />
        <div className="hidden lg:flex items-center gap-14">
          <Link
            to="/"
            className={`header-link font-semibold ${
              location.pathname === "/"
                ? "text-blue-500"
                : "text-black hover:text-sky-500 hover"
            }`}
          >
            Home
          </Link>

          <div className="relative group">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="header-dropdown-link flex font-semibold items-center gap-2 hover:text-sky-500"
            >
              About <IoMdArrowDropdown />
            </button>
            <div
              className={`absolute ${
                aboutOpen ? "block" : "hidden"
              } dropdown-menu bg-white shadow-lg rounded-md w-36 mt-1 transition-all duration-300 ease-in-out`}
            >
              <ul className="py-2 w-full">{renderDropdownLinks(aboutLinks)}</ul>
            </div>
          </div>

          <div className="relative group">
            <button
              onClick={() => setDepartmentsOpen(!departmentsOpen)}
              className="header-dropdown-link font-semibold flex items-center gap-2 hover:text-sky-500"
            >
              Departments <IoMdArrowDropdown />
            </button>
            <div
              className={`absolute ${
                departmentsOpen ? "block" : "hidden"
              } dropdown-menu bg-white shadow-lg rounded-md w-52 mt-1 transition-all duration-300 ease-in-out`}
            >
              <ul className="py-2 w-full">
                {renderDropdownLinks(departmentLinks)}
              </ul>
            </div>
          </div>

          <Link
            to="/facilities"
            className={`header-link font-semibold hover:text-sky-500 ${
              location.pathname === "/facilities" ? "text-blue-500" : ""
            }`}
          >
            Facilities
          </Link>
          <Link
            to="/gallery"
            className={`header-link font-semibold hover:text-sky-500 ${
              location.pathname === "/gallery" ? "text-blue-500" : ""
            }`}
          >
            Gallery
          </Link>

          <div className="relative group">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="header-dropdown-link font-semibold flex items-center gap-2 hover:text-sky-500"
            >
              More <IoMdArrowDropdown />
            </button>
            <div
              className={`absolute ${
                moreOpen ? "block" : "hidden"
              } dropdown-menu bg-white shadow-lg rounded-md w-32 mt-1 transition-all duration-300 ease-in-out`}
            >
              <ul className="py-2 w-full">{renderDropdownLinks(moreLinks)}</ul>
            </div>
          </div>

          <Link
            to="/contact"
            className={`header-link hover font-semibold  ${
              location.pathname === "/contact"
                ? "text-blue-500"
                : "text-black hover:text-sky-500"
            }`}
          >
            Contact
          </Link>
        </div>

        <button
          className="lg:hidden text-gray-600 hover:text-sky-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <IoMdMenu size={28} />
        </button>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-start space-y-2 px-4 py-2 bg-white shadow-md">
          <li>
            <Link
              to="/"
              className={`block py-2 hover:text-sky-500 ${
                location.pathname === "/" ? "text-blue-500" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex gap-2 items-center w-full py-2 hover:text-sky-500"
            >
              About <IoMdArrowDropdown />
            </button>
            <ul
              className={`pl-4 transition-all duration-300 ease-in-out ${
                aboutOpen ? "block" : "hidden"
              }`}
            >
              {renderDropdownLinks(aboutLinks)}
            </ul>
          </li>
          <li>
            <button
              onClick={() => setDepartmentsOpen(!departmentsOpen)}
              className="flex gap-2 items-center w-full py-2 hover:text-sky-500"
            >
              Departments <IoMdArrowDropdown />
            </button>
            <ul
              className={`pl-4 transition-all duration-300 ease-in-out ${
                departmentsOpen ? "block" : "hidden"
              }`}
            >
              {renderDropdownLinks(departmentLinks)}
            </ul>
          </li>
          <li>
            <Link
              to="/facilities"
              className={`block py-2 hover:text-sky-500 ${
                location.pathname === "/facilities" ? "text-blue-500" : ""
              }`}
            >
              Facilities
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className={`block py-2 hover:text-sky-500 ${
                location.pathname === "/gallery" ? "text-blue-500" : ""
              }`}
            >
              Gallery
            </Link>
          </li>
          <li>
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex gap-2 items-center w-full py-2 hover:text-sky-500"
            >
              More <IoMdArrowDropdown />
            </button>
            <ul
              className={`pl-4 transition-all duration-300 ease-in-out ${
                moreOpen ? "block" : "hidden"
              }`}
            >
              {renderDropdownLinks(moreLinks)}
            </ul>
          </li>
          <li>
            <Link
              to="/contact"
              className={`block py-2 hover:text-sky-500 ${
                location.pathname === "/contact" ? "text-blue-500" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MainHeader;
