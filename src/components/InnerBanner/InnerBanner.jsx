import React from "react";
import { motion } from "framer-motion";

export default function InnerBanner({ imagePath = "", heading = "" }) {
  return (
    <section className="elementor-section">
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[400px] lg:h-[400px] flex justify-center items-center text-center text-white font-bold"
        style={{
          backgroundImage: `url(${imagePath})`,
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          backgroundRepeat: "no-repeat",
          fontSize: "50px",
          fontFamily: "Playfair Display, sans-serif",
        }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70 z-1"></div>

        <motion.div
          className="relative z-2"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {heading}
        </motion.div>
      </div>
    </section>
  );
}
