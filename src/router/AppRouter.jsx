import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import ContactPage from "../pages/contact/ContactPage";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/contact" component={ContactPage} />
    </Switch>
  );
};

export default AppRouter;
