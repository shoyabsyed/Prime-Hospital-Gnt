import React, { useState, useRef } from "react";
import { FaChevronDown, FaChevronRight, FaMinus } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { motion, useInView } from "framer-motion";

const packageData = [
  {
    title: "MASTER HEALTH CHECKUP",
    content:
      "Comprehensive medical examination covering various health parameters to assess overall well-being, typically conducted annually for preventive healthcare.",
    list: [
      "FBS",
      "PPBS",
      "HBA1C",
      "Complete Blood Count",
      "Renal Functiontest (Blood Urea, Serum Creatinine)",
      "Lipid Profile",
      "Liver Function Test",
      "Urine Routine Examination",
      "ECG",
      "Chest X Ray",
      "Ultrasound Of The Abdomen",
      "Eye Checkup",
      "General Physician",
      "Diet Counselling",
    ],
  },
  {
    title: "CARDIAC HEALTH CHECKUP",
    content:
      "Specialized medical evaluation focusing on heart health, including tests for cardiovascular risk factors, function, and conditions, aiding in early detection and prevention.",
    list: [
      "ECG",
      "ECHO",
      "TMT",
      "FBS",
      "HBA1C",
      "Complete Blood Count",
      "Serum Creatinine",
      "Urine Routine Examination",
      "Lipid Profile",
      "Chest X Ray",
      "Liver Function Test",
      "Serum Uric Acid",
      "Cardiologist Consultation",
      "Diet Counselling",
    ],
  },
  {
    title: "WOMEN HEALTH CHECKUP",
    content:
      "Comprehensive medical assessment tailored for women, addressing gynecological, reproductive, and overall health concerns, promoting early detection and well-being.",
    list: [
      "FHS",
      "PPES",
      "Complete Blood Count",
      "Lipid Profile",
      "Liver Function Test",
      "Serum Creatinine",
      "Urine Routine Examination",
      "ECG",
      "Ultrasound abdomen",
      "Pap Smear",
      "Mammography",
      "Thyroid profile",
      "Echo Screening",
      "Cardiologist Consultation",
      "Gynecologist Consultation",
      "Eye Checkup",
      "Diet Counselling",
    ],
  },
  {
    title: "DIABETIC FOLLOW-UP HEALTH CHECKUP",
    content:
      "Regular health checkups for individuals with diabetes, focusing on monitoring blood sugar levels, complications, and lifestyle adjustments for optimal management and prevention.",
    list: [
      "FBS",
      "PPBS",
      "HBA1C",
      "Serum Creatinine",
      "Lipid Profile",
      "Urine Routine Examination",
      "Endocrinologist Consultation",
      "Eye Checkup",
      "Diet Counselling",
    ],
  },
  {
    title: "NEPHRO HEALTH CHECKUP",
    content:
      "Comprehensive health assessment focusing on kidney function, urine analysis, blood pressure monitoring, and other tests to evaluate renal health.",
    list: [
      "FBS",
      "PPBS",
      "HBA1C",
      "Complete Blood Count",
      "Renal function test (Blood urea nitrogen, Serum creatinine)",
      "Serum electrolytes",
      "Urine Routine Examination",
      "Nephrologist Consultation",
      "Diet Counselling",
    ],
  },
  {
    title: "GASTRO HEALTH CHECKUP",
    content:
      "Thorough evaluation of gastrointestinal health, including tests for digestive disorders, liver function, and screening for gastrointestinal cancers.",
    list: [
      "RBS",
      "Complete Blood Count",
      "HIV",
      "Ultrasound Of The Abdomen",
      "HCV",
      "HBsAgt",
      "Gastroscopy",
      "Gastroenterologist Consultation",
      "Diet Counselling",
    ],
  },
];

const Packages = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRef = useRef(null);
  const stepperRef = useRef(null);
  const isContentInView = useInView(contentRef, { triggerOnce: true });
  const isStepperInView = useInView(stepperRef, { triggerOnce: true });

  const togglePackage = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${"Images/surgeryImg.png"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className="flex flex-col md:flex-row items-center justify-center gap-8 p-4 md:p-8"
    >
      <motion.div
        ref={contentRef}
        className="text-white flex flex-col gap-2 p-4 md:p-8 w-full md:w-[30rem]"
        initial={{ x: -100, opacity: 0 }}
        animate={
          isContentInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }
        }
        transition={{ duration: 0.9 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold">OUR PACKAGES</h1>
        <div className="w-full md:w-80 h-[1px] bg-white"></div>
        <p className="text-sm md:text-base">
          Comprehensive Health Packages at the
          <b> Best Multispeciality Hospital in Guntur,</b> Andhra Prime
          Hospitals.
        </p>
      </motion.div>

      <motion.div
        ref={stepperRef}
        className="p-4 md:p-8 w-full md:w-[28rem]"
        initial={{ x: 100, opacity: 0 }}
        animate={
          isStepperInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }
        }
        transition={{ duration: 0.5 }}
      >
        {packageData.map((pkg, index) => (
          <div key={index} className="mb-4">
            <div
              className={`flex justify-between items-center p-3 cursor-pointer rounded-md shadow-md 
              ${
                activeIndex === index
                  ? "bg-gray-700 text-white"
                  : "bg-white text-black hover:bg-green-600 hover:text-white"
              }`}
              onClick={() => togglePackage(index)}
            >
              <h1 className="flex items-center gap-2 text-sm md:text-base md:font-semibold">
                {activeIndex === index ? <FaMinus /> : <GoDotFill />}
                {pkg.title}
              </h1>
              {activeIndex === index ? <FaChevronDown /> : <FaChevronRight />}
            </div>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                activeIndex === index
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              style={{
                transform:
                  activeIndex === index ? "translateY(0)" : "translateY(-20%)",
                visibility: activeIndex === index ? "visible" : "hidden",
                transitionProperty: "max-height, opacity, transform",
              }}
            >
              <div className="p-4 md:p-8 text-black rounded-b-md flex flex-col gap-2 md:gap-4">
                <p className="font-bold text-xs md:text-sm">{pkg.content}</p>
                <ul>
                  {pkg.list?.map((list, idx) => (
                    <li
                      key={idx}
                      className="list-disc font-bold text-xs md:text-sm"
                    >
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Packages;
