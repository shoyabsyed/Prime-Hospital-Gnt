import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";

const Header = () => {
  return (
    <div className="bg-green-600 text-white flex flex-col md:flex-row text-sm md:text-medium md:p-4 items-center justify-around p-2">
      <section className="flex flex-col md:flex-row items-center gap-5">
        <a
          href="tel:+91-9505544220"
          className="flex items-center gap-2 hover:text-blue-500 hover"
        >
          <IoIosCall />
          +91 9505544220
        </a>
        <a
          href="mailto:andhraprimeh@gmail.com"
          className="flex items-center gap-2 hover:text-blue-500 hover"
        >
          <IoMail />
          andhraprimeh@gmail.com
        </a>
      </section>
    </div>
  );
};

export default Header;
