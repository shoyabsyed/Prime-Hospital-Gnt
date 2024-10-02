import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full px-4">
      <section className="flex flex-col gap-4  md:gap-2 bg-green-600 text-white items-center justify-center p-4 md:p-14">
        <h1 className="text-xs font-bold md:text-xl">Emergency Services?</h1>
        <img
          src="/Images/hoursLogo.png"
          alt="logo-img"
          className="w-16 md:w-24"
        />
        <p className="text-center text-xs font-bold md:text-md md:font-semibold">
          We’re here to help 24/7
        </p>
      </section>

      <section className="flex flex-col gap-4 md:gap-6 bg-blue-600 text-white items-center justify-center p-4 md:p-6">
        <h1 className="text-xs font-bold md:text-xl">
          Book your appointment now
        </h1>
        <p className="text-center text-xs font-bold md:text-md md:font-semibold">
          Our doctors are available seven days a week.
        </p>
        <Link to="/contact">
          <button className="w-24  text-center py-1 rounded text-white border border-white bg-blue-500 hover:bg-green-300 hover:border-none hover">
            Book Now
          </button>
        </Link>
      </section>

      <section className="flex flex-col gap-4 md:gap-2 bg-green-600 text-white items-center justify-center p-4 md:p-6">
        <img
          src="/Images/medicalLogo.png"
          alt="medical-logo"
          className="w-16 md:w-24"
        />
        <p className="text-center text-xs font-bold md:text-md md:font-semibold">
          Comprehensive care through specialized departments for optimal patient
          outcomes.
        </p>
      </section>
    </div>
  );
};

export default Services;
