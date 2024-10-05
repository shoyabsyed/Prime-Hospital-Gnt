import { useEffect } from "react";
import BulletPoint from "../../../components/custom-components/BulletPoints";
import DiseasesSymptoms from "../../../components/custom-components/DiseasesSymptoms";
import SectionHeading from "../../../components/custom-components/SubHeading";
import InnerBanner from "../../../components/InnerBanner/InnerBanner";
import { orthopedicData, orthoprdicSymptoms } from "./data";

const OrthopedicPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <InnerBanner imagePath="/Images/bone1.png" heading="Orthopedic" />
      <section className="flex py-6 px-4 md:px-8 lg:px-14 flex-col gap-6">
        <p className="text-base md:text-lg lg:text-xl">
          Andhra Prime Hospitals – the leading orthopedic hospital that
          prioritizes your musculoskeletal health and empowers you to live an
          active, pain-free life. We understand the impact that orthopedic
          conditions can have on your daily life. Whether you’re suffering from
          joint pain, fractures, or any other orthopedic ailment, our team of
          highly skilled orthopedic specialists is dedicated to providing you
          with world-class care.
        </p>
        <SectionHeading title="We have the region's best orthopedic specialists for your optimal bone and joint health!" />
        <p className="text-base md:text-lg lg:text-xl">
          What sets us apart is our commitment to excellence in every aspect of
          your treatment journey. Our facility is equipped with advanced
          diagnostic tools to accurately assess your condition. This, combined
          with our team’s vast experience, allows us to offer personalized
          treatment plans tailored to your specific needs. Our multidisciplinary
          approach ensures you receive comprehensive care from a team of
          orthopedic surgeons. From diagnosis to treatment, we provide
          compassionate care and support.
        </p>
        <p className="text-base md:text-lg lg:text-xl">
          At Andhra Prime Hospitals, we offer a wide range of services,
          including joint replacements, accident and trauma care, and fracture
          management. Our surgeons are skilled in the latest techniques and
          advancements in orthopedic surgery, delivering successful outcomes
          with minimal discomfort and downtime. When it comes to joint
          replacement surgery, you deserve the best. That’s why we specialize in
          transforming lives by restoring mobility and alleviating joint pain.
        </p>
        <p className="text-base md:text-lg lg:text-xl">
          When you choose Andhra Prime Hospitals, you’re choosing the best
          orthopedic specialists – a place where your musculoskeletal health is
          our top priority. We are committed to delivering exceptional care,
          relieving your pain, and helping you regain mobility and quality of
          life.
        </p>
        <p className="text-base md:text-lg lg:text-xl">
          Don’t let orthopedic conditions hold you back. Trust Andhra Prime
          Hospitals and take the first step towards a healthier, more active
          future. Contact us today to schedule your consultation and experience
          the difference in specialized orthopedic care.
        </p>
        <SectionHeading title="Step into a new chapter of pain-free living at Andhra Prime Hospitals - the best joint replacement hospital." />
        <p className="text-base md:text-lg lg:text-xl">
          The finest destination for joint replacement. With a legacy of
          excellence and a team of highly skilled specialists, we offer the
          best-in-class care and cutting-edge technology to ensure successful
          joint replacements. Experience personalized treatment plans, top-notch
          facilities, and compassionate support that prioritize your comfort and
          recovery. Trust Andhra Prime Hospitals, the trusted choice for
          exceptional joint replacement care.
        </p>
        <DiseasesSymptoms
          title="When to See an Orthopedic Doctor"
          descrption="You may require to see a Orthopedic Doctor if you experience symtoms such as"
          diseasesData={orthoprdicSymptoms}
        />
        <p className="text-base md:text-lg lg:text-xl">
          These symptoms may suggest an orthopedic condition that needs medical
          evaluation. Furthermore, if you have a family history of orthopedic
          disorders, consulting an orthopedic doctor is advisable.
        </p>
        <SectionHeading title="Why Choose Us?" />
        {orthopedicData.map((item, idx) => (
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
      </section>
    </div>
  );
};

export default OrthopedicPage;
