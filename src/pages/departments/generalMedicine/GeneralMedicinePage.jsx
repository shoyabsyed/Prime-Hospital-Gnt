import BulletPoint from "../../../components/custom-components/BulletPoints";
import InnerBanner from "../../../components/InnerBanner/InnerBanner";
import { generalMedicineData } from "./data";

const GeneralMedicinePage = () => {
  return (
    <div className="bg-white">
      <InnerBanner
        imagePath="/Images/generalBanner.png"
        heading="General Medicine"
      />
      <section className="px-4 lg:px-10 py-6 flex flex-col gap-6">
        <p className="text-black text-lg lg:text-xl leading-relaxed">
          Welcome to the Department of General Medicine at Andhra Prime
          Hospitals – your partner in preserving and enhancing your overall
          health. Our team of dedicated and experienced internal medicine
          physicians specializes in diagnosing, treating, and managing a wide
          range of medical conditions. We are here to assist you on your journey
          to optimum health and well-being, emphasizing comprehensive care,
          preventive measures, and individualized treatment plans.
        </p>

        <section className="mt-8">
          <h1 className="text-3xl lg:text-4xl font-bold underline text-green-600 text-center">
            Specialized Services Offered
          </h1>
          <p className="mt-6 text-black text-lg lg:text-xl">
            At Andhra Prime Hospitals, our General Medicine Department provides
            a comprehensive range of specialized services tailored to meet your
            individual health needs:
          </p>

          {generalMedicineData.map((data, index) => (
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
        </section>

        <p className="my-6 text-black text-lg lg:text-xl leading-relaxed">
          At Andhra Prime Hospitals, our dedicated team of internists is
          committed to delivering personalized care and promoting your overall
          well-being. Contact us today to schedule an appointment and experience
          the exceptional care offered at Andhra Prime Hospitals.
        </p>
      </section>
    </div>
  );
};

export default GeneralMedicinePage;
