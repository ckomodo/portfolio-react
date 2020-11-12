import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home/index";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Background>
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
          </Background>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
