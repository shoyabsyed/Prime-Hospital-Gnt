import "./App.css";
import Footer from "./components/footer/Footer";
import SubFooter from "./components/footer/SubFooter";
import Header from "./components/header/Header";
import MainHeader from "./components/header/MainHeader";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div>
      <Header />
      <MainHeader />
      <AppRouter />
      <Footer />
      <SubFooter />
    </div>
  );
}

export default App;
