import { useEffect } from "react";
import DiseasesSymptoms from "../../../components/custom-components/DiseasesSymptoms";
import InnerBanner from "../../../components/InnerBanner/InnerBanner";
import { gynaecologySymptoms } from "./data";

const GynaecologyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <InnerBanner
        heading="Gynaecology"
        imagePath="/Images/gynaecologyBanner.png"
      />
      <section className="flex py-6 px-4 md:px-8 lg:px-14 flex-col gap-6">
        <p className="text-base md:text-lg lg:text-xl">
          A gynecologist is a medical specialist focused on women’s reproductive
          health, addressing everything from the intricacies of the female
          reproductive system to the nuances of pregnancy and childbirth. They
          provide essential healthcare throughout a woman’s life, from
          adolescence to menopause. Gynecologists play a critical role in
          protecting women’s health by diagnosing and treating conditions such
          as ovarian cysts, endometriosis, and cervical cancer. Additionally,
          they offer vital support through contraception counseling and regular
          screenings for breast and cervical cancer. In essence, gynecologists
          support women’s health by providing comprehensive medical care, from
          routine check-ups to surgical procedures, and educating women to make
          informed healthcare decisions at every stage of life.
        </p>
        <DiseasesSymptoms
          title="When to see a gynaecologist?"
          descrption="You may need to visit a gynecologist hospital in Guntur if you experience symptoms such as"
          diseasesData={gynaecologySymptoms}
        />
        <p className="text-base md:text-lg lg:text-xl">
          Consult a gynaecologist for any symptoms or concerns. Regular
          check-ups and screenings are essential for maintaining good
          reproductive health.
        </p>
      </section>
    </div>
  );
};

export default GynaecologyPage;
