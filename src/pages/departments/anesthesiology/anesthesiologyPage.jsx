import { useEffect } from "react";
import BulletPoint from "../../../components/custom-components/BulletPoints";
import InnerBanner from "../../../components/InnerBanner/InnerBanner";
import { AnesthesiologyData, AnesthesiologyTypes2 } from "./data";

const AnesthesiologyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <InnerBanner
        imagePath="/Images/anesthesiology.png"
        heading="Anesthesiology"
      />
      <section className="flex py-6 px-4 md:px-8 lg:px-14 flex-col gap-6">
        <p className="text-base md:text-lg lg:text-xl">
          The Department of Anesthesiology at Andhra Prime Hospitals is
          comprised of dedicated, highly experienced healthcare professionals
          focused on providing comprehensive anesthetic care. Our services span
          pre-operative anesthesia evaluation, pre-operative patient management,
          intensive care, and emergency and trauma services..
        </p>
        <p className="text-base md:text-lg lg:text-xl">
          As a premier tertiary care institute, we boast a modern infrastructure
          featuring modular operating rooms, advanced anesthesia workstations,
          and cutting-edge monitoring gadgets.
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-600 mt-4 underline text-center">
          Our Services
        </h1>
        <div class="text-xl font-bold">
          24/7 Anesthesia Care:
          <span class="font-xl font-normal px-2">
            We offer round-the-clock anesthesia services for both emergency and
            elective surgical procedures across various specialties, including:
          </span>
        </div>

        <ul class="mt-4 space-y-2">
          <li class="flex items-center">
            <BulletPoint />
            <span class="ml-2 text-xl font-normal">Oncology Surgery</span>
          </li>
          <li class="flex items-center">
            <BulletPoint />
            <span class="ml-2 text-xl font-normal">Neurosurgery</span>
          </li>
          <li class="flex items-center">
            <BulletPoint />
            <span class="ml-2 text-xl font-normal">Joint Replacement</span>
          </li>
          <li class="flex items-center">
            <BulletPoint />
            <span class="ml-2 text-xl font-normal">
              Obstetrics and Gynecology
            </span>
          </li>
          <li class="flex items-center">
            <BulletPoint />
            <span class="ml-2 text-xl font-normal">
              Urology and Kidney Transplant
            </span>
          </li>
          <li class="flex items-center">
            <BulletPoint />
            <span class="ml-2 text-xl font-normal">Minimal Access Surgery</span>
          </li>
          <li class="flex items-center">
            <BulletPoint />
            <span class="ml-2 text-xl font-normal">Day Care Procedures</span>
          </li>
        </ul>
        {AnesthesiologyData.map((data, index) => (
          <div key={index} className="mt-6">
            <h2 className="text-2xl font-bold text-green-600 mt-2">
              {data.title}
            </h2>
            {data.list.map((item, idx) => (
              <div key={idx} className="mt-4 flex flex-col gap-4">
                <h3 className="font-bold text-xl text-black flex items-center gap-2">
                  <BulletPoint />
                  {item.title}
                </h3>
                <p className="text-black text-lg lg:text-xl mt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        ))}

        <h1 className="text-lg lg:text-3xl font-bold text-green-600 mt-8 ">
          {" "}
          Cardiothoracic Anesthesia:
        </h1>

        <ul class="mt-4 space-y-2">
          <li class="flex items-center">
            <BulletPoint />
            <span class="ml-2 text-xl font-normal">
              Coronary Artery Bypass Surgery (CABG)
            </span>
          </li>
          <li class="flex items-center">
            <BulletPoint />
            <span class="ml-2 text-xl font-normal">
              Valve Repair and Replacement
            </span>
          </li>
          <li class="flex items-center">
            <BulletPoint />
            <span class="ml-2 text-xl font-normal">Thoracic Surgery</span>
          </li>
          <li class="flex items-center">
            <BulletPoint />
            <span class="ml-2 text-xl font-normal">Aortic Surgery</span>
          </li>
        </ul>
        {AnesthesiologyTypes2.map((service, idx) => (
          <div key={idx} className="mt-4 ">
            <h2 className="font-bold text-2xl flex items-center gap-2 mb-4">
              <BulletPoint /> {service.title}
            </h2>
            <p className="text-black text-xl ">{service.description}</p>
          </div>
        ))}
        <p>
          At Andhra Prime Hospitals, we are committed to delivering exceptional
          anesthetic care and support throughout your surgical journey. Our team
          is here to ensure your safety, comfort, and well-being every step of
          the way.
        </p>
      </section>
    </div>
  );
};

export default AnesthesiologyPage;
