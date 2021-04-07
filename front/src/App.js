import Navbar from "./components/Navbar/Navbar";
import MasterForm from "./components/Form/MasterForm";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Reality from "./components/Reality/Reality";

import Numbers from "./components/Numbers/Numbers";


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

      <Reality />


      <Numbers />

      <Footer />
    </div>
  );
}

export default App;
