import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import ContactPage from "../pages/contact/ContactPage";
import ServicesPage from "../pages/services/ServicesPage";
import GeneralMedicinePage from "../pages/departments/generalMedicine/GeneralMedicinePage";
import Cardiology from "../pages/departments/cardiology/Cardiology";

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
    </Switch>
  );
};

export default AppRouter;
