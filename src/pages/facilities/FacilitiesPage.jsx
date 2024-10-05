import React, { useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { motion, useAnimation, useInView } from "framer-motion"; // I
import { facilities } from "./data";

const FacilitiesPage = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    triggerOnce: true,
    threshold: 10,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-green-700 text-white pt-16">
      <div className="absolute inset-0 h-[40rem]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/Images/doctor.png)" }}
        ></div>
        <div className="absolute inset-0 bg-green-500 opacity-60"></div>
      </div>

      <motion.div
        className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-semibold md:font-bold">FACILITIES</h2>
          <p className="mt-4 max-w-7xl text-center text-xl md:text-3xl">
            Discover the comprehensive facilities available at Andhra Prime
            Hospitals, designed to ensure your comfort, convenience, and optimal
            healthcare experience.
          </p>
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        className="relative mt-12 flex flex-col p-4 md:p-0 md:grid lg:grid-cols-3 bg-white  py-8 mx-12"
        initial={{ opacity: 0, y: 200 }}
        animate={controls}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="bg-white p-6 border flex flex-col justify-between h-[24rem] gap-3"
          >
            <div className="flex justify-center mb-4">
              <img
                src={facility.logo}
                alt="facility-logo"
                width={80}
                className="mx-auto"
              />
            </div>
            <h3 className="text-2xl font-bold text-center text-green-600 mb-2">
              {facility.title}
            </h3>
            <p className="text-lg md:text-xl text-center text-black flex-grow ">
              {facility.description}
            </p>
          </div>
        ))}
        <p className="col-span-3 text-black text-xl p-8 text-center">
          At Andhra Prime Hospitals, we are committed to providing world-class
          facilities and services to meet your healthcare needs. Whether you
          require routine medical care, emergency treatment, or specialized
          services, we strive to deliver exceptional care with compassion and
          expertise.
        </p>
      </motion.div>

      <div className="bg-gray-100 flex flex-col md:flex-row items-center justify-center text-black p-4">
        <motion.section
          className="flex flex-col gap-6 p-8"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-1">
            <h1 className="md:text-4xl text-3xl">Instant appointment</h1>
            <b className="text-4xl">With Doctors</b>
          </div>
          <p className="text-xl">
            Read doctor-produced health and medical information written for you
            to make informed decisions about your health concerns.
          </p>
          <div className="flex flex-col gap-4">
            <p className="flex items-center gap-2 font-bold text-xl md:text-2xl">
              <span className="bg-green-500 rounded-full">
                <TiTick className="text-white" size={15} />
              </span>
              24/7 Service Facilities
            </p>
            <p className="flex items-center gap-2 font-bold text-xl md:text-2xl">
              <span className="bg-green-500 rounded-full">
                <TiTick size={15} className="text-white" />
              </span>
              Quality Doctors
            </p>
            <p className="flex items-center gap-2 font-bold text-xl md:text-2xl">
              <span className="bg-green-500 rounded-full">
                <TiTick size={15} className="text-white" />
              </span>
              World Class Environment
            </p>
          </div>
          <button className="bg-green-600 text-white w-48 p-4 rounded-full font-semibold hover:bg-cyan-700 hover">
            Appointment
          </button>
        </motion.section>

        <section>
          <img src="/Images/doctors.png" alt="doctor-img" width={1500} />
        </section>
      </div>
    </div>
  );
};

export default FacilitiesPage;
