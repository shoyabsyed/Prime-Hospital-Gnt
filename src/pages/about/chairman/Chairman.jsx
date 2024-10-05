import React, { useEffect } from "react";
import InnerBanner from "../../../components/InnerBanner/InnerBanner";

export default function Chairman() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section>
        <InnerBanner
          imagePath="Images/aboutBannerImg.png"
          heading="Chairman Message"
        />
      </section>

      <div className="chairmanImage text-center  py-12 flex items-center flex-col">
        <img src="\Images\chairman-image-290x300 (1).jpg" alt="" />
        <h2
          className="pt-4"
          style={{
            color: "#01AA5A",
            fontSize: "30px",
            fontWeight: "700",
            fontFamily: '"Tahoma", Sans-serif',
          }}
        >
          Degala Prabhakar
        </h2>
      </div>
      <div
        className="chairmanInfo py-6"
        style={{ fontSize: "22px", fontWeight: "600", marginLeft: "28px" }}
      >
        <p className="py-2">
          As Chairman, I’m honored to lead our team of dedicated professionals
          who, for over a decade, have been committed to delivering exceptional
          healthcare to our community.
        </p>
        <p className="py-2 pt-2">
          At Andhra Prime Hospital, our mission is simple: to provide
          unparalleled medical expertise and compassionate care to every patient
          who walks through our doors.
        </p>
        <p className="py-2 pt-2">
          With a decade of experience and a full spectrum of specialties, we
          stand as a beacon of excellence in healthcare. Our state-of-the-art
          facilities and unwavering dedication ensure that you receive the
          highest quality treatment tailored to your needs.
        </p>
      </div>
    </div>
  );
}
