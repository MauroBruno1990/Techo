import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import MasterForm from "./components/Form/MasterForm";
import Footer from "./components/Footer/Footer";
import SinglePayment from "./components/SinglePayment/SinglePayment";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import CarrouselTestimony from "./components/CarrouselTestimony/CarrouselTestimony";

function App() {
  const location = useLocation();
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MasterForm} />
          <Route exact path="/unicaVez" component={SinglePayment} />
        </Switch>
        <CarrouselTestimony />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
