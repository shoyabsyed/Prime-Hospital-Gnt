import AboutSection from "../../../components/custom-components/AboutSection";
import DiseasesSymptoms from "../../../components/custom-components/DiseasesSymptoms";
import SectionHeading from "../../../components/custom-components/SubHeading";
import InnerBanner from "../../../components/InnerBanner/InnerBanner";
import { ophthalmologyData, ophthalmologySymptoms } from "./data";

const OphthalmologyPage = () => {
    return (
        <div>
        <InnerBanner heading="Ophthalmology" imagePath="/Images/ophthalmology.png" />
        <section className="flex py-6 px-4 md:px-8 lg:px-14 flex-col gap-6">
        <p className="text-base md:text-lg lg:text-xl">
        Explore exceptional medical and surgical eye care services at Andhra Prime Hospitals, dedicated to patients of all ages.
         Our Eye Department embraces the latest advancements in diagnostic tools and microsurgical equipment to provide unmatched care.
        </p>
        <p className="text-base md:text-lg lg:text-xl">
        At the heart of our approach is personalized attention, where we prioritize each patient’s unique needs with customized treatment plans. 
        Our philosophy focuses on empowering optimal health and enhancing vision through compassionate care and advanced technology.
        </p>
        <p className="text-base md:text-lg lg:text-xl">
        Choosing Andhra Prime Hospitals means selecting a comprehensive eye care experience that exceeds expectations, ensuring your world remains vivid and uninterrupted.
         Your vision is invaluable to us, and we are dedicated to safeguarding, supporting, and celebrating it with you every step of the way.
        </p>
        <AboutSection data={ophthalmologyData} />
        <DiseasesSymptoms
          title="When to see an Ophthalmologist?"
          diseasesData={ophthalmologySymptoms}
          descrption="You may require to see an Ophthalmologist if you experience symptoms such as:"
        />
        <p className="text-base md:text-lg lg:text-xl">
        It’s important to consult an Ophthalmologist for any symptoms or concerns you may have.
         Regular check-ups and screenings play a crucial role in maintaining your overall health and well-being.
        </p>
        <div className="flex flex-col gap-6">
          <SectionHeading title="Why Choose Us?" />
          <p className="text-base md:text-lg lg:text-xl">
          Choosing Andhra Prime Hospitals for your retinal care means access to cutting-edge technology, specialized expertise, 
          and compassionate care that prioritizes your vision and well-being.
          </p>
          <p className="text-base md:text-lg lg:text-xl bold">
          Schedule a consultation with our retinal specialists today to take proactive steps towards
           preserving your vision and maintaining optimal eye health.
          </p>
        </div>
     </section>

        </div>
    );
};

export default OphthalmologyPage;