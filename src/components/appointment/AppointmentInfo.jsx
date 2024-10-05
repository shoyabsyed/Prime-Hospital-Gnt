import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CountUp = ({ targetNumber, duration, startCounting }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    let start = 0;
    const totalSteps = duration / 100;
    const increment = Math.ceil(targetNumber / totalSteps);

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        start = targetNumber;
        clearInterval(timer);
      }
      setCount(start);
    }, 100);

    return () => clearInterval(timer);
  }, [targetNumber, duration, startCounting]);

  return <b className="text-xl">{count}+</b>;
};

const AppointmentInfo = ({
  backgroudImage = "",
  overlayColor = "",
  helperText = "",
  description = "",
  hoverColor = "",
}) => {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-6 p-4 lg:p-10"
      style={{
        backgroundImage: `url(${backgroudImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: overlayColor,
        }}
      ></div>

      <section className="relative w-full lg:w-1/2 text-white flex flex-col gap-4 lg:pr-8 z-10">
        <h1 className="text-3xl lg:text-4xl">
          What Makes Us Stand Out Among
          <span className="font-bold"> {helperText}</span>?
        </h1>
        <p className="text-sm lg:text-base">{description}</p>
        <Link to="/contact">
          <button
            className="w-48 lg:w-52 mt-4 border border-white text-center font-bold rounded py-2 hover"
            style={{ transition: "background-color 0.3s" }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = hoverColor)}
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            Book an Appointment
          </button>
        </Link>
      </section>

      <section className="relative grid grid-cols-2 gap-4 w-full lg:w-[25rem] mt-8 lg:mt-0 z-10">
        {[
          { targetNumber: 7, label: "Years Of Experience" },
          { targetNumber: 10, label: "Specialization" },
          { targetNumber: 25, label: "Doctors" },
          { targetNumber: 10000, label: "Happy Patients", isStatic: true },
        ].map(({ targetNumber, label, isStatic }, index) => (
          <motion.div
            key={index}
            className="w-full h-36 bg-white flex flex-col items-center justify-center gap-2 rounded"
            initial={{ opacity: 0, y: 20 }}
            animate={startCounting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {isStatic ? (
              <b className="text-xl">{targetNumber}</b>
            ) : (
              <CountUp
                targetNumber={targetNumber}
                duration={3000}
                startCounting={startCounting}
              />
            )}
            <p className="text-sm lg:text-base">{label}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default AppointmentInfo;
