import Navbar from "./components/Navbar/Navbar";
import MasterForm from "./components/Form/MasterForm";
import Footer from "./components/Footer/Footer";
import SinglePayment from "./components/SinglePayment/SinglePayment";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/Techo" component={MasterForm} />
        </Switch>
        <Redirect from="/" to="/Techo" />
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
