import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown, IoMdMenu, IoMdRemove } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  const location = useLocation();

  const aboutLinks = [
    { name: "Chairman", path: "/chairman" },
    { name: "Hospital", path: "/hospital" },
    { name: "Doctors Team", path: "/doctors-team" },
  ];

  const departmentLinks = [
    { name: "General Medicine", path: "/departments/general-medicine" },
    { name: "Cardiology", path: "/departments/cardiology" },
    { name: "Neurosurgery", path: "/departments/neurosurgery" },
    { name: "Pulmonology", path: "/departments/pulmonology" },
    { name: "Urology", path: "/departments/urology" },
    { name: "Gynaecology", path: "/departments/gynaecology" },
    { name: "Pediatrics", path: "/departments/pediatrics" },
    { name: "ENT", path: "/departments/ent" },
    { name: "Ophthalmology", path: "/departments/ophthalmology" },
    { name: "Radiology", path: "/departments/radiology" },
    { name: "Orthopedic", path: "/departments/orthopedic" },
    { name: "Anesthesiology", path: "/departments/anesthesiology" },
    {
      name: "Cardiothoracic Surgery",
      path: "/departments/cardiothoracic-surgery",
    },
  ];

  const moreLinks = [
    { name: "Testimonials", path: "/testimonials" },
    { name: "Blog", path: "/more/blog" },
  ];

  const renderDropdownLinks = (links) =>
    links.map((link, index) => (
      <li key={index}>
        <Link
          to={link.path}
          className="block px-4 py-2 hover:text-sky-500"
          onClick={() => setMenuOpen(false)}
        >
          <IoMdRemove className="inline-block mr-2 md:hidden" />
          {link.name}
        </Link>
      </li>
    ));

  const isSubmenuActive = (links) => {
    return links.some((link) => location.pathname === link.path);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsScrollingUp(false);
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsScrollingUp(true);
        setIsHeaderVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`main-header w-full bg-white sticky top-0 py-4 shadow-md transition-transform duration-300 z-50 ${
        isHeaderVisible && isScrollingUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-4 lg:px-8">
          <img src="/Images/logo.png" alt="logo-img" className="w-24 h-auto" />
          <div className="hidden lg:flex items-center gap-14">
            <Link
              to="/"
              className={`header-link font-semibold ${
                location.pathname === "/"
                  ? "text-blue-500"
                  : "text-black hover:text-sky-500"
              }`}
            >
              HOME
            </Link>

            <div className="relative group">
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`tracking-4 header-dropdown-link flex font-semibold items-center gap-2 hover:text-sky-500 ${
                  isSubmenuActive(aboutLinks) ? "text-blue-500" : ""
                }`}
              >
                ABOUT <IoMdArrowDropdown />
              </button>
              <div
                className={`absolute ${
                  aboutOpen ? "block" : "hidden"
                } dropdown-menu bg-white shadow-lg rounded-md w-36 mt-1 transition-all duration-300 ease-in-out`}
              >
                <ul className="py-2 w-full">
                  {renderDropdownLinks(aboutLinks)}
                </ul>
              </div>
            </div>

            <div className="relative group">
              <button
                onClick={() => setDepartmentsOpen(!departmentsOpen)}
                className={`tracking-4 header-dropdown-link font-semibold flex items-center gap-2 hover:text-sky-500 ${
                  isSubmenuActive(departmentLinks) ? "text-blue-500" : ""
                }`}
              >
                DEPARTMENTS <IoMdArrowDropdown />
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
              className={`tracking-4 header-link font-semibold hover:text-sky-500 ${
                location.pathname === "/facilities" ? "text-blue-500" : ""
              }`}
            >
              FACILITIES
            </Link>
            <Link
              to="/gallery"
              className={`tracking-4 header-link font-semibold hover:text-sky-500 ${
                location.pathname === "/gallery" ? "text-blue-500" : ""
              }`}
            >
              GALLERY
            </Link>

            <div className="relative group">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className={`tracking-4 header-dropdown-link font-semibold flex items-center gap-2 hover:text-sky-500 ${
                  isSubmenuActive(moreLinks) ? "text-blue-500" : ""
                }`}
              >
                MORE <IoMdArrowDropdown />
              </button>
              <div
                className={`absolute ${
                  moreOpen ? "block" : "hidden"
                } dropdown-menu bg-white shadow-lg rounded-md w-32 mt-1 transition-all duration-300 ease-in-out`}
              >
                <ul className="py-2 w-full">
                  {renderDropdownLinks(moreLinks)}
                </ul>
              </div>
            </div>

            <Link
              to="/contact"
              className={`tracking-4 header-link hover font-semibold  ${
                location.pathname === "/contact"
                  ? "text-blue-500"
                  : "text-black hover:text-sky-500"
              }`}
            >
              CONTACT
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
                onClick={() => setMenuOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`flex gap-2 items-center w-full py-2 hover:text-sky-500 ${
                  isSubmenuActive(aboutLinks) ? "text-blue-500" : ""
                }`}
              >
                ABOUT <IoMdArrowDropdown />
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
                className={`flex gap-2 items-center w-full py-2 hover:text-sky-500 ${
                  isSubmenuActive(departmentLinks) ? "text-blue-500" : ""
                }`}
              >
                DEPARTMENTS <IoMdArrowDropdown />
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
                onClick={() => setMenuOpen(false)}
              >
                FACILITIES
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className={`block py-2 hover:text-sky-500 ${
                  location.pathname === "/gallery" ? "text-blue-500" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                GALLERY
              </Link>
            </li>
            <li>
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className={`flex gap-2 items-center w-full py-2 hover:text-sky-500 ${
                  isSubmenuActive(moreLinks) ? "text-blue-500" : ""
                }`}
              >
                MORE <IoMdArrowDropdown />
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
                onClick={() => setMenuOpen(false)}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
