import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import ContactPage from "../pages/contact/ContactPage";
import ServicesPage from "../pages/services/ServicesPage";
import GeneralMedicinePage from "../pages/departments/generalMedicine/GeneralMedicinePage";
import Cardiology from "../pages/departments/cardiology/Cardiology";
import NeurosurgeryPage from "../pages/neurologist/NeurologistPage";
import PulmonologyPage from "../pages/departments/pulmonology/pulmonologyPage";
import UrologyPage from "../pages/departments/urology/UrologyPage";

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
    </Switch>
  );
};

export default AppRouter;
