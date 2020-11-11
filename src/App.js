import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home/index";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact/index";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
