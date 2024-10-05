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
          <div
            key={idx}
            className="grid grid-rows-2 justify-center items-center w-40 gap-2"
          >
            <div className="h-[50%]">
              <img
                src={symptom.logo}
                alt={`${symptom.symptom}-logo`}
                width={90}
                className="mx-auto"
              />
            </div>
            <h2 className="font-bold text-center h-[50%]">{symptom.symptom}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiseasesSymptoms;
