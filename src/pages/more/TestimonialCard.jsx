import React from 'react';
import { LuUsers2 } from "react-icons/lu";

const TestimonialCard = ({ quote, name }) => {
  return (
    <div className="bg-purple rounded-lg shadow-lg p-6 h-full flex flex-col justify-between pt-6">
      {/* Large Quote Icon */}
      <div className="text-green-600 text-6xl mb-4">
        &#10077;
      </div>
      {/* Quote */}
      <p className="text-black-600 mb-6 text-2xl leading-relaxed whitespace-pre-wrap">
        {quote.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
      {/* Profile Section */}
      <div className="flex items-center">
        {/* Profile Icon */}
        <div className="w-12 h-12 rounded-full bg-[#EAF6FF] flex justify-center items-center">
          <LuUsers2 className="text-gray-500 text-2xl" />
        </div>
        {/* Name */}
        <div className="ml-4">
          <h3 className="font-bold text-black-900 text-2xl">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
