import { useEffect } from "react";
import AboutSection from "../../../components/custom-components/AboutSection";
import DiseasesSymptoms from "../../../components/custom-components/DiseasesSymptoms";
import SectionHeading from "../../../components/custom-components/SubHeading";
import InnerBanner from "../../../components/InnerBanner/InnerBanner";
import { urologyData, urologyDiseaseSymptoms } from "./data";

const UrologyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <InnerBanner heading="Urology" imagePath="/Images/kidneyBanner.png" />
      <section className="py-6 px-4 md:px-8 lg:px-14 flex flex-col gap-6 md:gap-8">
        <p className="text-base md:text-lg lg:text-xl">
          At Andhra Prime Hospitals, our Urology Department is known for its
          advanced and specialized care that meets international standards. We
          offer modern facilities specializing in diagnostics and treatment for
          urological cancers, urinary tract infections, renal diseases,
          reconstructive urology surgeries, laparoscopic procedures, erectile
          dysfunction treatments, kidney stone management, pediatric urology,
          prostate conditions, pediatric renal transplants, and andrology. Our
          commitment to patient-centered care, combined with cutting-edge
          medical advancements, establishes us as a premier destination for
          urological treatments.
        </p>
        <SectionHeading title="Urological Conditions" />
        <p className="text-base md:text-lg lg:text-xl">
          At Andhra Prime Hospitals, we understand the impact of urological
          conditions on individuals of all ages and genders, disrupting daily
          lives and causing discomfort. Some of the common urological conditions
          we address include:
        </p>
        <AboutSection data={urologyData} />
        <p className="text-base md:text-lg lg:text-xl">
          If you are experiencing symptoms related to any of these urological
          conditions, it is crucial to seek diagnosis and treatment. Andhra
          Prime Hospitals, one of the best urology hospitals in Guntur, offers
          advanced facilities to ensure accurate diagnoses and effective
          management of urological diseases.
        </p>
        <DiseasesSymptoms
          title="When to See a Urologist?"
          diseasesData={urologyDiseaseSymptoms}
          descrption="You may require to see a urologist if you experience symptoms such as"
        />
        <p className="text-base md:text-lg lg:text-xl">
          If you notice any of these symptoms, they could indicate a urological
          condition that requires medical attention. If there’s a family history
          of urological disorders, it’s advisable to seek care at a top-rated
          stone hospital.
        </p>
      </section>
    </div>
  );
};

export default UrologyPage;
