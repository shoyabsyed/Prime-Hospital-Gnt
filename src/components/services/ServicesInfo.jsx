import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const servicesData = [
  {
    title: "General Medicine",
    description:
      "Expert general medicine care for all your primary health needs.",
    imageSrc: "Images/firstAidImage.png",
    link: "/departments/general-medicine",
  },
  {
    title: "Cardiology",
    description: "Advanced cardiology care for a healthier heart.",
    imageSrc: "Images/heartLogo.png",
    link: "/departments/cardiology",
  },
  {
    title: "Neurosurgery",
    description: "Expert neurosurgery for advanced brain and spine care.",
    imageSrc: "Images/brainLogo.png",
    link: "/departments/neurosurgery",
  },
  {
    title: "Pulmonology",
    description: "Specialized pulmonology care for optimal respiratory health.",
    imageSrc: "Images/lungsLogo.png",
    link: "/departments/pulmonology",
  },
  {
    title: "Urology",
    description:
      "Advanced urology care for comprehensive urinary and reproductive health.",
    imageSrc: "Images/urologyLogo.png",
    link: "/departments/urology",
  },
  {
    title: "Pediatrics",
    description:
      "Compassionate pediatric care for your child’s health and development.",
    imageSrc: "Images/babyLogo.png",
    link: "#",
  },
];
const AboutUs = ({
  services = servicesData,
  gridColumns = "lg:grid-cols-3",
  hideButton = false,
  subServiceContainerRequired = false,
  subServiceData,
  showTitle = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      style={{ background: "#DFF2E1" }}
      className="flex flex-col items-center gap-4 justify-center py-20 px-4"
    >
      {showTitle && (
        <>
          <motion.h1
            className="text-2xl md:text-3xl font-bold text-green-600 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0 }}
          >
            Andhra Prime Centre of Excellence
          </motion.h1>

          <motion.p
            className="text-center text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Your Health, Our Priority: Leading Excellence in Medical Care at One
            of the <b>Top Hospitals in Guntur</b>.
          </motion.p>
        </>
      )}

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-[1px] w-full max-w-6xl ${gridColumns}`}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white flex flex-col items-center gap-3 justify-center p-6 md:py-12 hover:border-b-4 hover:cursor-pointer hover:border-green-600 hover shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
          >
            <img
              src={service.imageSrc}
              alt={`${service.title}-logo`}
              width={50}
            />
            <h1 className="font-bold text-lg">{service.title}</h1>
            <p className="text-center text-sm md:text-base">
              {service.description}
            </p>
            <a href={service.link} className="text-green-600">
              Learn More
            </a>
          </motion.div>
        ))}
      </div>
      {subServiceContainerRequired && (
        <motion.div
          className="bg-white w-full max-w-6xl flex flex-col items-center gap-3 justify-center p-6 md:py-12 hover:border-b-4 hover:cursor-pointer hover:border-green-600 hover shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 1,
            delay: 0.5 + 4 * 0.1,
          }}
        >
          <img
            src={subServiceData?.imageSrc}
            alt={`${subServiceData?.title}-logo`}
            width={50}
          />
          <h1 className="font-bold text-2xl">{subServiceData?.title}</h1>
          <p className="text-center text-sm md:text-base">
            {subServiceData?.description}
          </p>
          <a href={subServiceData?.link} className="text-green-600">
            Learn More
          </a>
        </motion.div>
      )}
      {!hideButton && (
        <Link to="/departments">
          <motion.button
            className="w-36 py-2 text-center bg-green-600 hover:bg-emerald-400 hover hover:-translate-y-2 rounded transition-transform duration-300 text-white mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            View All Services
          </motion.button>
        </Link>
      )}
    </div>
  );
};

export default AboutUs;
