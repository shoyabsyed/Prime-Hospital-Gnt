import Banner from "../../components/banner/Banner";
import PackagesContent from "../../components/packages/PackagesContent";
import AboutOurServices from "../../components/services/AboutOurServices";
import ServicesInfo from "../../components/services/ServicesInfo";
import Services from "../../components/services/Services";
import Packages from "../../components/packages/Packages";
import AppointmentInfo from "../../components/appointment/AppointmentInfo";
import AppointmentContact from "../../components/contact/AppointmentContact";
import PatientsFeedBack from "../../components/custom-components/Stepper";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner />
      <Services />
      <AboutOurServices />
      <ServicesInfo />
      <Packages />
      <PackagesContent />
      <AppointmentInfo
        backgroudImage="Images/hospitalImg.png"
        hoverColor="#37993f"
        description="Discover the key factors that set us apart. Our commitment to excellence and innovation makes us the top choice for exceptional care."
        helperText="Guntur Top Hospitals"
      />
      <AppointmentContact />
      <div className="flex w-full items-center justify-center p-6">
        <PatientsFeedBack />
      </div>
    </div>
  );
};

export default HomePage;
