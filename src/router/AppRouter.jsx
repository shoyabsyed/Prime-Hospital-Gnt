import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import ContactPage from "../pages/contact/ContactPage";
import ServicesPage from "../pages/services/ServicesPage";
import GeneralMedicinePage from "../pages/departments/generalMedicine/GeneralMedicinePage";
import Cardiology from "../pages/departments/cardiology/Cardiology";
import EntSymptoms from "../pages/departments/ent/Ent";
import PulmonologyPage from "../pages/departments/pulmonology/pulmonologyPage";
import UrologyPage from "../pages/departments/urology/UrologyPage";
import Ophthalmology from "../pages/departments/ophthalmology/Ophthalmology";
import NeurosurgeryPage from "../pages/departments/neurologist/NeurologistPage";
import PediatricsPage from "../pages/departments/pediatrics/PediatricsPage";
import GynaecologyPage from "../pages/departments/gynaecology/GynaecologyPage";
import OrthopedicPage from "../pages/departments/orthopedic/OrthopedicPage";
import RadiologyPage from "../pages/departments/radiology/Radiology";
import AnesthesiologyPage from "../pages/departments/anesthesiology/anesthesiologyPage";
import CardiothoracicPage from "../pages/departments/cardiothoracic/CardiothoracicPage";
import Chairman from "../pages/about/chairman/Chairman";
import GalleryPage from "../pages/gallery/GalleryPage";
import FacilitiesPage from "../pages/facilities/FacilitiesPage";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/departments" component={ServicesPage} />
      <Route
        exact
        path="/departments/general-medicine"
        component={GeneralMedicinePage}
      />
      <Route exact path="/departments/cardiology" component={Cardiology} />
      <Route exact path="/departments/ent" component={EntSymptoms} />
      <Route
        exact
        path="/departments/neurosurgery"
        component={NeurosurgeryPage}
      />
      <Route
        exact
        path="/departments/pulmonology"
        component={PulmonologyPage}
      />
      <Route exact path="/departments/urology" component={UrologyPage} />
      <Route
        exact
        path="/departments/ophthalmology"
        component={Ophthalmology}
      />
      <Route exact path="/departments/pediatrics" component={PediatricsPage} />
      <Route
        exact
        path="/departments/gynaecology"
        component={GynaecologyPage}
      />
      <Route exact path="/departments/orthopedic" component={OrthopedicPage} />
      <Route exact path="/departments/radiology" component={RadiologyPage} />
      <Route
        exact
        path="/departments/anesthesiology"
        component={AnesthesiologyPage}
      />
      <Route
        exact
        path="/departments/cardiothoracic-surgery"
        component={CardiothoracicPage}
      />
      <Route exact path="/chairman" component={Chairman} />
      <Route exact path="/gallery" component={GalleryPage} />
      <Route exact path="/facilities" component={FacilitiesPage} />
    </Switch>
  );
};

export default AppRouter;
