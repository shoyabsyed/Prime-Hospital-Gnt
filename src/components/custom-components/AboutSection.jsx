const AboutSection = ({ data = [] }) => {
  return (
    <>
      {data?.map((data, idx) => (
        <div key={idx} className="flex flex-col gap-4 mt-4">
          <h1 className="text-green-500 font-bold text-2xl">{data?.title}:</h1>
          <p className="text-xl">{data?.description}</p>
        </div>
      ))}
    </>
  );
};

export default AboutSection;
