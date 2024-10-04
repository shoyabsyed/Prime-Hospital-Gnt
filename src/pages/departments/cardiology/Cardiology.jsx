import { TiTick } from "react-icons/ti";
import BulletPoint from "../../../components/custom-components/BulletPoints";
import InnerBanner from "../../../components/InnerBanner/InnerBanner";
import {
  CardiologyData,
  cardiologySymptoms,
  choosingOptionsData,
  keyProceduresList,
} from "./data";
import DiseasesSymptoms from "../../../components/custom-components/DiseasesSymptoms";
import SectionHeading from "../../../components/custom-components/SubHeading";

const ListItem = ({ item }) => (
  <div className="flex items-center gap-2 mb-2">
    <div className="bg-blue-600 text-white flex items-center justify-center h-4 w-4 rounded-full">
      <TiTick className="text-xs" />
    </div>
    <p className="text-lg">{item}</p>
  </div>
);

const Cardiology = () => {
  const midIndex = Math.ceil(keyProceduresList.length / 2);
  const leftList = keyProceduresList.slice(0, midIndex);
  const rightList = keyProceduresList.slice(midIndex);

  return (
    <div>
      <InnerBanner imagePath="/Images/cardiology.png" heading="Cardiology" />
      <section className="px-4 md:px-14 lg:px-20 py-6 flex flex-col gap-6">
        <p className="text-black text-xl">
          Welcome to Andhra Prime Hospitals, where we place profound importance
          on heart health as a cornerstone of overall well-being...
        </p>

        <section className="flex flex-col gap-6">
          <SectionHeading title="Our Expertise" />
          <p className="text-black text-xl">
            Our Cardiology Department is dedicated to diagnosing, treating, and
            managing various heart conditions...
          </p>
          {CardiologyData.map((service, idx) => (
            <div key={idx} className="mt-4">
              <h2 className="font-bold text-xl flex items-center gap-2">
                <BulletPoint /> {service.title}:
              </h2>
              <p className="text-black text-xl">{service.description}</p>
            </div>
          ))}
        </section>

        <SectionHeading title="Key Procedures offered at Andhra Prime Hospital" />
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            {leftList.map((item, idx) => (
              <ListItem key={idx} item={item} />
            ))}
          </div>
          <div>
            {rightList.map((item, idx) => (
              <ListItem key={idx} item={item} />
            ))}
          </div>
        </section>

        <DiseasesSymptoms
          descrption="You may require to see a best cardiologist in Andhra Pradesh if you
          experience symptoms such as"
          title="When Would I Need a Cardiologist?"
          diseasesData={cardiologySymptoms}
        />
        <SectionHeading title="Why Choose Us?" />
        {choosingOptionsData.map((option, idx) => (
          <div key={idx} className="mt-4">
            <h2 className="font-bold text-xl flex items-center gap-2">
              <BulletPoint /> {option.title}:
            </h2>
            <p className="text-black text-xl">{option.description}</p>
          </div>
        ))}

        <p className="text-xl pt-6">
          Whether you require routine heart check-ups, specialized treatment, or
          ongoing care for a heart condition...
        </p>
      </section>
    </div>
  );
};

export default Cardiology;
