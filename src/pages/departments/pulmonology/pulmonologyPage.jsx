import AboutSection from "../../../components/custom-components/AboutSection";
import DiseasesSymptoms from "../../../components/custom-components/DiseasesSymptoms";
import SectionHeading from "../../../components/custom-components/SubHeading";
import InnerBanner from "../../../components/InnerBanner/InnerBanner";
import { pulmonologyData, pulmonologydDiseaseSymptoms } from "./data";

const PulmonologyPage = () => {
  return (
    <div>
      <InnerBanner heading="Pulmonology" imagePath="/Images/lungsBanner.png" />
      <section className="py-6 px-4 md:px-8 lg:px-14 flex flex-col gap-6">
        <p className="text-base md:text-lg lg:text-xl">
          Welcome to the Pulmonology Department at Andhra Prime Hospitals, where
          we are dedicated to providing exceptional care for patients with
          respiratory conditions and disorders. Our team of skilled
          pulmonologists, supported by advanced technology, offers comprehensive
          services to diagnose, treat, and manage a wide range of pulmonary
          conditions.
        </p>
        <SectionHeading title="Our Services" />
        <AboutSection data={pulmonologyData} />
        <DiseasesSymptoms
          title="When to See a Pulmonologist?"
          diseasesData={pulmonologydDiseaseSymptoms}
          descrption="You may require to see a Pulmonologist if you experience symptoms such as"
        />
        <p className="text-base md:text-lg lg:text-xl">
          If you experience persistent symptoms like chronic cough, shortness of
          breath, chest pain or tightness, wheezing, sleep apnea symptoms such
          as extreme tiredness or loud snoring, or dizziness, it may be time to
          consult a pulmonologist. These symptoms could indicate underlying
          respiratory or sleep-related issues that require expert evaluation and
          treatment.
        </p>
        <p className="text-base md:text-lg lg:text-xl">
          At Andhra Prime Hospitals, our Pulmonology Department is dedicated to
          providing comprehensive care for a wide range of respiratory
          conditions and sleep disorders. Our team of skilled pulmonologists
          utilizes advanced diagnostic tests and personalized treatment
          approaches to help patients breathe easier and improve their overall
          quality of life. Whether you need diagnostic testing, treatment for
          respiratory conditions, sleep medicine expertise, or support through
          our smoking cessation program, we are here to support your respiratory
          health journey with compassionate care and effective treatments.
        </p>
      </section>
    </div>
  );
};

export default PulmonologyPage;
