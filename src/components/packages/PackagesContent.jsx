const PackagesContent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-8 w-full bg-white p-4 md:p-8">
      <section className="flex flex-col gap-4 w-full lg:w-auto">
        <div className="h-[2px] w-full bg-green-500 hidden md:block"></div>
        <h1 className="text-green-600 text-2xl md:text-3xl font-bold">
          Why Andhra Prime Hospitals
        </h1>
      </section>
      <section className="w-full lg:w-[35em]">
        <p className="text-sm md:text-base">
          At Andhra Prime Hospitals, our modern infrastructure, advanced medical
          equipment, and well-appointed patient rooms create an ideal environment
          for healing and recovery. We prioritize patient comfort and safety,
          providing personalized attention from our expert team of doctors, nurses,
          and support staff. Our comprehensive range of specialized services meets
          diverse healthcare needs, continuously innovating with the latest medical
          research and technologies to provide top-quality care.
        </p>
      </section>
    </div>
  );
};

export default PackagesContent;
