import Navbar from "./components/Navbar/Navbar";
import MasterForm from "./components/Form/MasterForm";
import Footer from "./components/Footer/Footer";
import SinglePayment from "./components/SinglePayment/SinglePayment";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MasterForm} />
          <Route exact path="/unicaVez" component={SinglePayment} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
