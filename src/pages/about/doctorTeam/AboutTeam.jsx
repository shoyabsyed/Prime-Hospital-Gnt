import React, { useEffect } from "react";
import InnerBanner from "../../../components/InnerBanner/InnerBanner";
import { doctorsTeam } from "./data";

function AboutTeam() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section>
        <InnerBanner
          imagePath="Images/doctorImageBanner.png"
          heading="Doctors Team"
        />
      </section>
      <div className="flex flex-col w-full items-center px-4">
        <h2
          className="py-6 text-center"
          style={{
            color: " #01AA5A",
            fontFamily: "Tahoma",
            fontSize: "40px",
            fontWeight: "600",
          }}
        >
          Meet Our Doctors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-8">
          {doctorsTeam.map((item) => {
            return (
              <div className="w-64 grid grid-rows-2 text-center gap-2">
                <section className="rounded overflow-hidden w-64">
                  <img className="w-full mx-auto" src={item.img} alt="" />
                </section>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-lg font-semibold text-gray-400">
                    {" "}
                    {item?.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutTeam;
