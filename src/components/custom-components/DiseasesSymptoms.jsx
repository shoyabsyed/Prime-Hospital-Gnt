import SectionHeading from "./SubHeading";

const DiseasesSymptoms = ({
  diseasesData = [],
  title = "",
  descrption = "",
}) => {
  return (
    <div className="py-4 flex flex-col gap-4">
      <SectionHeading title={title} />
      <p className="text-center text-xl">{descrption}:</p>
      <div className="flex flex-col lg:flex-row md:flex-wrap items-center justify-center gap-6 mt-4">
        {diseasesData.map((symptom, idx) => (
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
    </div>
  );
};

export default DiseasesSymptoms;
