import { Link } from "react-router-dom";

const AboutOurServices = () => {
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-2 bg-white w-full items-center justify-center px-6 md:px-36 py-4">
      <section className="flex flex-col gap-6 items-center md:items-start text-center md:text-left w-full md:w-[30rem]">
        <h4 className="font-bold text-sm md:text-xl">
          Andhra Prime Hospitals Best Hospitals in Guntur
        </h4>
        <h1 className="text-2xl md:text-5xl font-bold">
          We’ll take care of <span className="text-green-600">your health</span>
        </h1>
        <p className="text-base md:text-lg">
          At Andhra Prime Hospitals, we prioritize your well-being with advanced
          medical technology and skilled specialists. Experience exceptional and
          compassionate care for all your health needs.
        </p>
        <Link to="/contact">
          <button className="w-48 py-2 text-center text-white bg-green-600 hover:bg-emerald-300 hover:-translate-y-2 rounded transition-transform duration-300 hover">
            Book an Appointment
          </button>
        </Link>
      </section>
      <div className="w-full flex justify-center md:justify-end mb-6 md:mb-0">
        <img
          src="Images/doctorImage.png"
          alt="doctor-img"
          className="w-[80%] md:w-[500px] object-cover mx-auto"
        />
      </div>
    </div>
  );
};

export default AboutOurServices;
