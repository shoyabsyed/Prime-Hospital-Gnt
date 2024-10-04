import AboutSection from "../../../components/custom-components/AboutSection";
import DiseasesSymptoms from "../../../components/custom-components/DiseasesSymptoms";
import SectionHeading from "../../../components/custom-components/SubHeading";
import InnerBanner from "../../../components/InnerBanner/InnerBanner";
import { neurologyData, neurologySymptoms } from "./data";

const NeurosurgeryPage = () => {
  return (
    <div>
      <InnerBanner heading="Neurosurgery" imagePath="/Images/brainBanner.png" />
      <section className="flex py-6 px-4 md:px-8 lg:px-14 flex-col gap-6">
        <p className="text-base md:text-lg lg:text-xl">
          Welcome to the Neurosurgery Department at Andhra Prime Hospitals,
          where we specialize in the intricate field of neurosurgical care,
          addressing conditions affecting the brain, skull, spinal cord, spinal
          column, and peripheral nerves.
        </p>
        <p className="text-base md:text-lg lg:text-xl">
          Neurosurgery is a highly complex medical specialty focused on treating
          conditions affecting the brain, skull, spinal cord, spinal column, and
          peripheral nerves. Recent advancements in neurosurgical techniques
          have significantly improved treatment outcomes. Minimally invasive and
          endoscopic procedures reduce hospital stays, enhance patient comfort,
          and increase procedure effectiveness. Our dedicated team of
          experienced neurosurgeons, along with advanced equipment, strives to
          deliver exceptional patient care that meets international standards.
        </p>
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-600 mt-4 underline text-center">
            Surgeries performed at Andhra Prime Hospitals
          </h1>
          <AboutSection data={neurologyData} />
        </div>
        <DiseasesSymptoms
          title="When Would I Need a Neurologist?"
          diseasesData={neurologySymptoms}
          descrption="You may require to see a Neurologist if you experience symptoms such as"
        />
        <p className="text-base md:text-lg lg:text-xl">
          If you experience these symptoms or have a family history of
          neurological disorders, persistent headaches, dizziness, seizures, or
          other risk factors associated with neurological conditions, it is
          advisable to seek medical attention, potentially from a neurologist.
        </p>
        <div className="flex flex-col gap-6">
          <SectionHeading title="Our Commitment" />
          <p className="text-base md:text-lg lg:text-xl">
            At Andhra Prime Hospitals, we are committed to providing exceptional
            neurosurgical care that meets international standards. Our team of
            highly experienced neurosurgeons, supported by advanced equipment
            and facilities, ensures that every patient receives personalized and
            effective treatment.
          </p>
          <p className="text-base md:text-lg lg:text-xl">
            Whether you require surgery for a complex brain condition or spinal
            disorder, Andhra Prime Hospitals’ Neurosurgery Department is
            dedicated to achieving the best possible outcomes for your
            neurological health.
          </p>
        </div>
      </section>
    </div>
  );
};

export default NeurosurgeryPage;
