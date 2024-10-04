import BulletPoint from "../../../components/custom-components/BulletPoints";
import SectionHeading from "../../../components/custom-components/SubHeading";
import InnerBanner from "../../../components/InnerBanner/InnerBanner";
import { pediatricsData } from "./data";

const PediatricsPage = () => {
  return (
    <div>
      <InnerBanner heading="Pediatrics" imagePath="/Images/babyBanner.png" />
      <section className="flex py-6 px-4 md:px-8 lg:px-14 flex-col gap-6">
        <p className="text-base md:text-lg lg:text-xl">
          At Andhra Prime Hospitals, our Pediatrics Department is dedicated to
          delivering compassionate and comprehensive care for children from
          infancy through adolescence. Our team of board-certified pediatricians
          and pediatric specialists is committed to promoting children’s health
          and well-being and supporting families in their journey to raise
          healthy, happy kids.
        </p>
        <p className="text-base md:text-lg lg:text-xl">
          Choosing the best pediatrician is a crucial and challenging decision
          for every parent. This decision is necessary from the first general
          check-up through all the vaccinations up to 10 years of age. As
          parents, it’s natural to have concerns about your children’s health
          and safety. Having the right pediatrician by your side is like having
          a guardian angel for your child. At Andhra Prime Hospitals, we strive
          to provide quality support with the best child specialists. We take
          pride in handling all health issues, both acute and chronic, with ease
          and expertise.
        </p>
        <section>
          <SectionHeading title="When to See a Pediatrician" />
          {pediatricsData.map((item, idx) => (
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
        <p className="text-base md:text-lg lg:text-xl">
          Regular visits ensure your child receives optimal medical care and
          support for their overall health and development.
        </p>
      </section>
    </div>
  );
};

export default PediatricsPage;
