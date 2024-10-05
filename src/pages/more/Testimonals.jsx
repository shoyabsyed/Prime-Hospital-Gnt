import React from "react";
import TestimonialCard from "./TestimonialCard";
import { TestimonialsData } from "./data";
import InnerBanner from "../../components/InnerBanner/InnerBanner";
import PatientsFeedBack from "../../components/custom-components/Stepper";

const Testimonals = () => {
  return (
    <div>
      <InnerBanner heading="Testimonials" text-bold />
      <div className="bg-white-100 w-full min-h-screen flex justify-center items-center px-14 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TestimonialsData.map((testimonial, index) => (
            <div className="flex justify-center items-center bg-[#EAF6FF] ">
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full items-center justify-center p-6">
        <PatientsFeedBack showHeading={false} />
      </div>
    </div>
  );
};

export default Testimonals;
