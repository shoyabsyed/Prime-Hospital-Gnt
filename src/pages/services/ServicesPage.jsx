import { useEffect } from "react";
import InnerBanner from "../../components/InnerBanner/InnerBanner";
import AboutUs from "../../components/services/ServicesInfo";

const servicesData = [
  {
    title: "General Medicine",
    description:
      "Expert general medicine care for all your primary health needs.",
    imageSrc: "Images/firstAidImage.png",
    link: "/departments/general-medicine",
  },
  {
    title: "Cardiology",
    description: "Advanced cardiology care for a healthier heart.",
    imageSrc: "Images/heartLogo.png",
    link: "/departments/cardiology",
  },
  {
    title: "Neurosurgery",
    description: "Expert neurosurgery for advanced brain and spine care.",
    imageSrc: "Images/brainLogo.png",
    link: "/departments/neurosurgery",
  },
  {
    title: "Pulmonology",
    description: "Specialized pulmonology care for optimal respiratory health.",
    imageSrc: "Images/lungsLogo.png",
    link: "/departments/pulmonology",
  },
  {
    title: "Urology",
    description:
      "Advanced urology care for comprehensive urinary and reproductive health.",
    imageSrc: "Images/urologyLogo.png",
    link: "/departments/urology",
  },
  {
    title: "Pediatrics",
    description:
      "Compassionate pediatric care for your child’s health and development.",
    imageSrc: "Images/babyLogo.png",
    link: "/departments/pediatrics",
  },
  {
    title: "ENT",
    description:
      "Advanced ENT care for complete ear, nose, and throat wellness.",
    imageSrc: "Images/entLogo.png",
    link: "/departments/ent",
  },
  {
    title: "Ophthalmology",
    description:
      "Expert ophthalmology care for comprehensive eye health and vision.",
    imageSrc: "Images/eyeLogo.png",
    link: "#",
  },
  {
    title: "Radiology",
    description: "Precision radiology for accurate diagnostics and imaging.",
    imageSrc: "Images/ctScanLogo.png",
    link: "#",
  },
  {
    title: "Gynaecology",
    description: "Gynecology care for women’s health and wellness.",
    imageSrc: "Images/maternity.png",
    link: "/departments/gynaecology",
  },
  {
    title: "Orthopedic",
    description:
      "Expert orthopedic care for optimal musculoskeletal health and recovery.",
    imageSrc: "Images/physicalTheraphyLogo.png",
    link: "#",
  },
  {
    title: "Anesthesiology",
    description: "Anesthesiology care for safe and effective pain management.",
    imageSrc: "Images/medicalLogo2.png",
    link: "#",
  },
];
const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subServiceData = {
    title: "Cardiothoracic Surgery",
    description:
      "Advanced cardiothoracic surgery for exceptional heart and lung care.",
    imageSrc: "Images/cardiologyLogo.png",
    link: "#",
  };

  return (
    <div style={{ background: "#DFF2E1" }}>
      <InnerBanner imagePath="Images/servicesBanner.png" heading="Services" />
      <div className="py-12">
        <AboutUs
          services={servicesData}
          gridColumns="lg:grid-cols-4"
          hideButton={true}
          subServiceContainerRequired={true}
          subServiceData={subServiceData}
          showTitle={false}
        />
      </div>
    </div>
  );
};

export default ServicesPage;
