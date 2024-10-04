import {
  MdMailOutline,
  MdOutlineCall,
  MdOutlineLocationOn,
} from "react-icons/md";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#12171f" }}>
      <section className="grid grid-cols-1 md:grid-cols-3 text-white">
        <div className="flex flex-col gap-2 items-center justify-center border-b md:border-b-0 md:border-r border-slate-800 p-6 md:p-10">
          <div className="border-2 rounded-full p-3 mb-3">
            <MdOutlineCall className="text-xl" />
          </div>
          <p style={{ fontSize: "18px" }}>Call us for an appointment</p>
          <p style={{ fontSize: "20px" }} className="font-bold leading-6">
            +91 9505544220
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center border-b md:border-b-0 md:border-r border-slate-800 p-6 md:p-10">
          <div className="border-2 rounded-full p-3 mb-3">
            <MdMailOutline className="text-xl" />
          </div>
          <p style={{ fontSize: "18px" }}>Feel free to contact us.</p>
          <p style={{ fontSize: "20px" }} className="font-bold leading-6">
            andhraprimeh@gmail.com
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center p-6 md:p-10">
          <div className="border-2 rounded-full p-3 mb-3">
            <MdOutlineLocationOn className="text-xl" />
          </div>
          <p style={{ fontSize: "18px" }}>Reach us via our location</p>
          <p style={{ fontSize: "20px" }} className="font-bold leading-6">
            View Map
          </p>
        </div>
      </section>

      <section className="text-white flex flex-col md:flex-row justify-around gap-8 items-start border-t border-slate-800 p-8 py-20">
        <section className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto">
          <div className="flex flex-col gap-3 md:w-96">
            <h1 style={{ fontSize: "20px" }} className="font-semibold mb-1">
              About Us
            </h1>
            <p style={{ fontSize: "17px" }} className="text-xs leading-9">
              Andhra Prime Hospitals, one of the leading healthcare facilities
              in Guntur, boasts over 7 years of experience and a team of 25+
              highly qualified doctors.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:w-1/2">
            <h1 style={{ fontSize: "20px" }} className="font-semibold mb-5">
              Quick Links
            </h1>
            <a
              style={{ fontSize: "17px" }}
              href="#"
              className="text-xs hover hover:text-blue-600 mb-2"
            >
              Home
            </a>
            <a
              style={{ fontSize: "17px" }}
              href="#"
              className="text-xs hover hover:text-blue-600 mb-2"
            >
              About
            </a>
            <a
              style={{ fontSize: "17px" }}
              href="/departments"
              className="text-xs hover hover:text-blue-600 mb-2"
            >
              Services
            </a>
            <a
              style={{ fontSize: "17px" }}
              href="#"
              className="text-xs hover hover:text-blue-600 mb-2"
            >
              Team
            </a>
          </div>
        </section>

        <div className="text-white flex flex-col gap-4 w-full md:w-auto">
          <h1 style={{ fontSize: "20px" }} className="font-semibold mb-4">
            We're here to help you
          </h1>
          <img
            src="/Images/hoursLogo.png"
            alt="hours-logo"
            className="mx-auto"
            width={100}
          />
        </div>
      </section>
    </div>
  );
};

export default Footer;
