import BulletPoint from "../../../components/custom-components/BulletPoints";
import SectionHeading from "../../../components/custom-components/SubHeading";
import InnerBanner from "../../../components/InnerBanner/InnerBanner";
import { EntData, EntPblmSymptoms } from "./data";

const EntSymptoms = () => {
  return (
    <div>
      <InnerBanner imagePath="/Images/entImage.png" heading="ENT" />
      <section className="px-4 md:px-14 lg:px-20 py-6 flex flex-col gap-6">
        <p className="text-black text-xl">
          At Andhra Prime Hospitals, our Ear, Nose, and Throat (ENT) department
          is dedicated to providing comprehensive care for patients of all ages.
          Led by a team of highly skilled ENT specialists, we offer a wide range
          of diagnostic, therapeutic, and surgical services to address various
          ear, nose, throat, head, and neck conditions.
        </p>

        <section className="flex flex-col gap-6">
          <SectionHeading title="Our Services" />
          {EntData.map((service, idx) => (
            <div key={idx} className="mt-4">
              <h2 className="font-bold text-xl flex items-center gap-2">
                <BulletPoint /> {service.title}:
              </h2>
              <p className="text-black text-xl">{service.description}</p>
            </div>
          ))}
        </section>

        <SectionHeading title="When to see a ENT Specialist?" />
        <p className="text-black text-xl">
          You may require to see a ENT Specialist if you experience symptoms
          such as:
        </p>
        <div className="flex flex-col lg:flex-row md:flex-wrap items-center justify-center gap-6 mt-4">
          {EntPblmSymptoms.map((symptom, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img
                src={symptom.logo}
                alt={`${symptom.symptom}-logo`}
                width={90}
              />
              <h2 className="font-bold text-center">{symptom.symptom}</h2>
            </div>
          ))}
        </div>
        <p className="text-xl pt-6">
          Consult an ENT specialist for any symptoms or concerns related to ear,
          nose, or throat issues. Regular check-ups and screenings are essential
          to ensure good health and early detection of any potential problems.
        </p>
        <p className="text-xl pt-6 pb-6">
          At Andhra Prime Hospitals, we recognize the profound impact that ENT
          conditions can have on patients’ lives. Our commitment lies in
          delivering compassionate and personalized care tailored to address
          each patient’s specific concerns and aspirations. Whether the goal is
          enhancing hearing, alleviating sinus issues, or restoring voice
          functionality, our dedicated team is focused on achieving optimal
          outcomes and promoting overall health and well-being for every
          individual we serve.
        </p>
      </section>
    </div>
  );
};

export default EntSymptoms;
