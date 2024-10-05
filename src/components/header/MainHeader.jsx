import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown, IoMdMenu, IoMdRemove } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownState, setDropdownState] = useState({
    aboutOpen: false,
    departmentsOpen: false,
    moreOpen: false,
  });
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const location = useLocation();

  const links = {
    aboutLinks: [
      { name: "Chairman", path: "/chairman" },
      { name: "Hospital", path: "/hospital" },
      { name: "Doctors Team", path: "/doctors-team" },
    ],
    departmentLinks: [
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
        name: "Cardiology",
        path: "/departments/cardiothoracic-surgery",
      },
    ],
    moreLinks: [
      { name: "Testimonials", path: "/more/testimonials" },
      { name: "Blog", path: "/more/blog" },
    ],
  };

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

  const toggleDropdown = (dropdown) => {
    setDropdownState((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isSmallScreen) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsScrollingUp(false);
          setIsHeaderVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setIsScrollingUp(true);
          setIsHeaderVisible(true);
        }
      } else {
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          setIsScrollingUp(false);
          setIsHeaderVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setIsScrollingUp(true);
          setIsHeaderVisible(true);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen]);

  return (
    <header
      className={`main-header w-full bg-white sticky top-0 py-4 shadow-md transition-transform duration-300 z-50 ${
        menuOpen && "overflow-x-hidden"
      } ${
        isHeaderVisible && isScrollingUp
          ? "translate-y-0"
          : isSmallScreen
          ? "translate-y-0"
          : "-translate-y-full"
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
                onClick={() => toggleDropdown("aboutOpen")}
                className={`tracking-4 header-dropdown-link font-semibold flex items-center gap-2 hover:text-sky-500 ${
                  isSubmenuActive(links.aboutLinks) ? "text-blue-500" : ""
                }`}
              >
                ABOUT <IoMdArrowDropdown />
              </button>
              <div
                className={`absolute ${
                  dropdownState.aboutOpen ? "block" : "hidden"
                } dropdown-menu bg-white shadow-lg rounded-md mt-1 transition-all duration-300 ease-in-out w-40`}
              >
                <ul className="py-2 w-full">
                  {renderDropdownLinks(links.aboutLinks)}
                </ul>
              </div>
            </div>

            <div className="relative group">
              <button
                onClick={() => toggleDropdown("departmentsOpen")}
                className={`tracking-4 header-dropdown-link font-semibold flex items-center gap-2 hover:text-sky-500 ${
                  isSubmenuActive(links.departmentLinks) ? "text-blue-500" : ""
                }`}
              >
                DEPARTMENTS <IoMdArrowDropdown />
              </button>
              <div
                className={`absolute ${
                  dropdownState.departmentsOpen ? "block" : "hidden"
                } dropdown-menu bg-white shadow-lg rounded-md mt-1 transition-all duration-300 ease-in-out w-40`}
              >
                <ul className="py-2 w-full">
                  {renderDropdownLinks(links.departmentLinks)}
                </ul>
              </div>
            </div>

            <Link
              to="/gallery"
              className={`tracking-4 header-link font-semibold hover:text-sky-500 ${
                location.pathname === "/gallery"
                  ? "text-blue-500"
                  : "text-black hover:text-sky-500"
              }`}
            >
              GALLERY
            </Link>

            <Link
              to="/facilities"
              className={`tracking-4 header-link font-semibold hover:text-sky-500 ${
                location.pathname === "/facilities"
                  ? "text-blue-500"
                  : "text-black hover:text-sky-500"
              }`}
            >
              FACILITIES
            </Link>

            <div className="relative group">
              <button
                onClick={() => toggleDropdown("moreOpen")}
                className={`tracking-4 header-dropdown-link font-semibold flex items-center gap-2 hover:text-sky-500 ${
                  isSubmenuActive(links.moreLinks) ? "text-blue-500" : ""
                }`}
              >
                MORE <IoMdArrowDropdown />
              </button>
              <div
                className={`absolute ${
                  dropdownState.moreOpen ? "block" : "hidden"
                } dropdown-menu bg-white shadow-lg rounded-md mt-1 transition-all duration-300 ease-in-out w-40`}
              >
                <ul className="py-2 w-full">
                  {renderDropdownLinks(links.moreLinks)}
                </ul>
              </div>
            </div>

            <Link
              to="/contact"
              className={`tracking-4 header-link font-semibold hover:text-sky-500 ${
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
          className={`lg:hidden transition-all duration-300 ease-in-out p-4${
            menuOpen ? "max-h-screen" : "max-h-0"
          } overflow-hidden`}
        >
          <ul className="flex flex-col mt-4">
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

            {/* About Dropdown for Mobile */}
            <li>
              <button
                onClick={() => toggleDropdown("aboutOpen")}
                className={`block py-2 hover:text-sky-500 flex justify-between w-full ${
                  isSubmenuActive(links.aboutLinks) ? "text-blue-500" : ""
                }`}
              >
                ABOUT <IoMdArrowDropdown />
              </button>
              <ul
                className={`pl-4 ${
                  dropdownState.aboutOpen ? "block" : "hidden"
                }`}
              >
                {renderDropdownLinks(links.aboutLinks)}
              </ul>
            </li>

            {/* Departments Dropdown for Mobile */}
            <li>
              <button
                onClick={() => toggleDropdown("departmentsOpen")}
                className={`block py-2 hover:text-sky-500 flex justify-between w-full ${
                  isSubmenuActive(links.departmentLinks) ? "text-blue-500" : ""
                }`}
              >
                DEPARTMENTS <IoMdArrowDropdown />
              </button>
              <ul
                className={`pl-4 ${
                  dropdownState.departmentsOpen ? "block" : "hidden"
                }`}
              >
                {renderDropdownLinks(links.departmentLinks)}
              </ul>
            </li>

            {/* Gallery and Facilities Links for Mobile */}
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

            {/* More Dropdown for Mobile */}
            <li>
              <button
                onClick={() => toggleDropdown("moreOpen")}
                className={`block py-2 hover:text-sky-500 flex justify-between w-full ${
                  isSubmenuActive(links.moreLinks) ? "text-blue-500" : ""
                }`}
              >
                MORE <IoMdArrowDropdown />
              </button>
              <ul
                className={`pl-4 ${
                  dropdownState.moreOpen ? "block" : "hidden"
                }`}
              >
                {renderDropdownLinks(links.moreLinks)}
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
