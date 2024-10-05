import React from "react";
import InnerBanner from "../InnerBanner/InnerBanner";

function AboutTeam() {
  const doctorsTeam = [
    {
      name: "Dr. A. ANVESH KUMAR - MBBS, MD GENERAL MEDICINE",
      img: "/Images/AveshKumar.png",
      details:
        " CONSULTANT PHYSICIAN AND DIABETOLOGIST FELLOW IN INFECTIOUS DISEASE",
    },

    {
      name: "Dr. J. TEJASWI - MD, DM CARDIOLOGY (GOLD MEDALIST)",
      img: "Images/DoctorTejaswi.png",
      details: "CONSULTANT INTERVENTIONAL CARDIOLOGIST",
    },

    {
      name: "Dr. K. SAI RAJA SEKHAR - MBBS, MD RESPIRATORY MEDICINE",
      img: "/Images/RajaSekharImg.png",
      details: " CONSULTANT INTERVENTIONAL PULMONOLOGIST",
    },

    {
      name: "Dr. B. PAVAN - M.S, M.CH (NIMS)",
      img: "/Images/PavanImg.png",
      details:
        "CONSULTANT NEUROSURGEON MINIMAL INVASIVE SPINE SURGERY (AHMEDABAD)",
    },

    {
      name: " Dr. G. NAVEEN",
      designation: "MBBS, MS,MCHUR .",
      img: "/Images/NaveenImg.png",
      details: "Consultant Urologist",
    },

    {
      name: "Dr. S. HIMABINDU - MBBS, MS OBG",
      img: "/Images/HimabinduImg.png",
      details: "CONSULTANT OBSTETRICIAN AND GYNAECOLOGIST",
    },
    {
      name: "Dr. P. SIRISHA - MBBS, MD PAEDIATRICS",
      img: "/Images/SirishaImg.png",
      details: "CONSULTANT PAEDIATRICIAN",
    },
    {
      name: "Dr. K. VENKATESWARARAO - M.S(ENT)",
      img: "/Images/Venkateshwarao.png",
      details: "HEAD & NECK SURGEON & SKULL BASE SURGEON",
    },
    {
      name: "Dr. MADHAVI LATHA - M.B.B.S., D.O., D.N.B. FELLOW IN GLAUCOMA",
      img: "/Images/MadhavilathaImg.png",
      details: "CONSULTANT OPHTHALMOLOGIST",
    },
    {
      name: "Dr. CH. JAGADEESH - MBBS, D ORTHO MS ORTHO, MCH ORTHO",
      img: "/Images/JagadeeshImg.png",
      details: "CONSULTANT TRAUMA AND JOINT REPLACEMENT (HIP & KNEE) SURGEON",
    },
    {
      name: "Dr. V. GOPI KRISHNA - MBBS, MD ANAESTHESIOLOGY",
      img: "/Images/GopikrishnaImg.png",
      details: "SPECIALIST IN OT AND CRITICAL CARE",
    },
    {
      name: "DR. P. KUPPU SWAMY - MS, MCH CTVS",
      img: "/Images/KuppuswamyImg.png",
      details: "CARDIOTHORACIC AND VASCULAR SURGEON",
    },
    {
      name: "Dr. A. KOTI VENKATESWARARAO - MA. DNB FMAS. FAGE",
      img: "/Images/KotiImg.png",
      details: "Surgical Gastroentrologist & liver transplant surgeon",
    },
    {
      name: "Dr. N. KRUSHNA TEJA - MBBS, MD Radiology, FVIR",
      img: "/Images/KrushnaTejaImg.png",
      details: "Consultant Interventional Radiologist",
    },
    {
      name: "Dr. M. Vijaya Krishna - BPT, MIAP",
      img: "/Images/VijayaImg.png",
      details: "Consultant Physiotherapist",
    },
  ];
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
            console.log("items", item);
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
