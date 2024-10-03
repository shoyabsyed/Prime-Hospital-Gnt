import React from "react";

const Location = () => {
  return (
    <div className="flex flex-col gap-4 items-center p-10 w-full">
      <h1 className="text-4xl font-bold text-green-600 underline mb-4 flex items-center">
        Location
      </h1>
      <div className="w-full max-w-4xl">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.330415652507!2d80.43046152706261!3d16.30665266367082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a1a80c4b9d8ef%3A0x258b1c8b6e6b6b4c!2sGuntur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <img src="Images/ratingImage.png" alt="rate-us" width={50} />
      <h1 className="text-4xl text-green-600 font-bold cursor-pointer">
        Rate Us on Google
      </h1>
    </div>
  );
};

export default Location;
