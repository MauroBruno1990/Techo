
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header'
import MasterForm from './components/Form/MasterForm';
import Footer from "./components/Footer/Footer";
import SinglePayment from "./components/SinglePayment/SinglePayment";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div> 
      <BrowserRouter>
        <Navbar />
        <Header/>
          <Switch>
            <Route exact path="/" component={MasterForm}/>
            <Route exact path="/unicaVez" component={SinglePayment}/>
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
