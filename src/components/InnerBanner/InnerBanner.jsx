import React from "react";

export default function InnerBanner(props) {
  return (
    <section className="elementor-section">
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${props?.imagePath})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          padding: "80px 0",
          textAlign: "center",
          fontSize: "60px",
          fontWeight: "900",
          lineHeight: "1.5em",
          fontFamily: "Playfair Display Sans-serif",
          color: "#fff",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(15, 23, 42, 0.7)",
            zIndex: 1,
          }}
        ></div>

        <div style={{ position: "relative", zIndex: 2 }}>{props?.heading}</div>
      </div>
    </section>
  );
}
