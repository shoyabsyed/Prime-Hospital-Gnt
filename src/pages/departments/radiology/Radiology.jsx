import { useEffect } from "react";
import BulletPoint from "../../../components/custom-components/BulletPoints";
import SectionHeading from "../../../components/custom-components/SubHeading";
import InnerBanner from "../../../components/InnerBanner/InnerBanner";
import { RadiologyTypes, RadiologyOfChild, RadiologyData } from "./data";

const RadiologyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <InnerBanner imagePath="/Images/radiology.png" heading="Radiology" />
      <section className="flex py-6 px-4 md:px-8 lg:px-14 flex-col gap-6">
        <p className="text-base md:text-lg lg:text-xl">
          Welcome to the Radiology Department at Andhra Prime Hospitals, where
          advanced imaging technology and expert radiologists converge to
          provide exceptional diagnostic and interventional services.
        </p>
        <SectionHeading title="Our Services" />
        <h1 className="text-xl md:text-2xl lg:text-3xl text-green-600 font-bold">
          Diagnostic Imaging:
        </h1>
        <p className="text-base md:text-lg lg:text-xl">
          Our Diagnostic Imaging services encompass a wide range of modalities
          designed to accurately diagnose and monitor various medical
          conditions. Utilizing cutting-edge technology, we offer:
        </p>

        {RadiologyData.map((service, idx) => (
          <div key={idx} className="mt-4">
            <h2 className="font-bold text-xl flex items-center gap-2">
              <BulletPoint /> {service.title}:
            </h2>
            <p className="text-black text-xl">{service.description}</p>
          </div>
        ))}

        <div class="text-green-600 font-bold text-3xl mt-12">
          Interventional Radiology:
        </div>
        <p className="text-base md:text-lg lg:text-xl">
          Our Interventional Radiology team performs minimally invasive
          procedures using image guidance to treat a variety of conditions.
          These procedures often serve as alternatives to traditional surgery,
          offering benefits such as reduced risk, shorter recovery times, and
          minimal discomfort. Services include:
        </p>
        {RadiologyTypes.map((service, idx) => (
          <div key={idx} className="mt-4 ">
            <h2 className="font-bold text-2xl flex items-center gap-2 mb-4">
              <BulletPoint /> {service.title}
            </h2>
            <p className="text-black text-xl ">{service.description}</p>
          </div>
        ))}

        <div class="text-green-600 font-bold text-3xl mt-12">
          Women's Imaging:
        </div>
        <p className="text-base md:text-lg lg:text-xl">
          Specialized imaging services tailored to women’s health needs,
          ensuring accurate diagnosis and compassionate care. Our Women’s
          Imaging services include:
        </p>
        {RadiologyOfChild.map((service, idx) => (
          <div key={idx} className="mt-4 ">
            <h2 className="font-bold text-2xl flex items-center gap-2 mb-4">
              <BulletPoint /> {service.title}
            </h2>
            <p className="text-black text-xl ">{service.description}</p>
          </div>
        ))}

        <div class="text-green-600 font-bold text-3xl mt-12">
          Pediatric Imaging:
        </div>
        <p className="text-base md:text-lg lg:text-xl">
          Our Pediatric Imaging services are dedicated to providing safe and
          accurate imaging for children of all ages. We understand the unique
          needs of pediatric patients and strive to create a comforting
          environment. Services include:
        </p>
        {RadiologyOfChild.map((service, idx) => (
          <div key={idx} className="mt-4 ">
            <h2 className="font-bold text-2xl flex items-center gap-2 mb-4">
              <BulletPoint /> {service.title}
            </h2>
            <p className="text-black text-xl ">{service.description}</p>
          </div>
        ))}

        <h1>hello radiology</h1>
        <SectionHeading title="Why Choose Us?" />
        <p className="text-base md:text-lg lg:text-xl">
          At Andhra Prime Hospitals, our Radiology Department is committed to
          delivering precise and timely diagnostic services. Our team of
          experienced radiologists and technologists utilizes the latest imaging
          technology to ensure the highest standards of care. We prioritize
          patient comfort and safety, providing clear communication and
          compassionate support throughout the imaging process.
        </p>
      </section>
    </div>
  );
};

export default RadiologyPage;
