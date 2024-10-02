import Banner from "../../components/banner/Banner";
import Header from "../../components/header/Header";
import MainHeader from "../../components/header/MainHeader";
import PackagesContent from "../../components/packages/PackagesContent";
import AboutOurServices from "../../components/services/AboutOurServices";
import ServicesInfo from "../../components/services/ServicesInfo";
import Services from "../../components/services/Services";
import Packages from "../../components/packages/Packages";
import AppointmentInfo from "../../components/appointment/AppointmentInfo";
import AppointmentContact from "../../components/contact/AppointmentContact";
import PatientsFeedBack from "../../components/custom-components/Stepper";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Services />
      <AboutOurServices />
      <ServicesInfo />
      <Packages />
      <PackagesContent />
      <AppointmentInfo />
      <AppointmentContact />
      <div className="flex w-full items-center justify-center p-6">
        <PatientsFeedBack />
      </div>
    </div>
  );
};

export default HomePage;
