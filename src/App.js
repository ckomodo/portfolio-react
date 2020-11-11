import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home/index";
import Portfolio from "./components/pages/Portfolio"
import Contact from "./components/pages/Contact/index"
import Navbar from "./components/Navbar/index"
import Footer from "./components/Footer/index"
import Jumbotron from "react-bootstrap/Jumbotron";
import "./App.css"

function App() {
  return (
    <div className = "App">
    <Router>
    
      <Navbar />
      <Switch>
        <Route exact path="/home">
        <Jumbotron className="Jumbotron">
          <h1>chris sakwa wesonga</h1>
          <p>full stack web developer</p>
          <hr />
        </Jumbotron>
          <Home />
        </Route>
        <Route exact path="/contact">
          <h1>Contact</h1>
          <Contact />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/">
        <Jumbotron className="Jumbotron">
        <h1>chris sakwa wesonga</h1>
          <p>full stack web developer</p>
          <hr />
        </Jumbotron>
        <Home />
        </Route>
      </Switch>
<Footer />
    </Router>
    </div>
  );
}

export default App;
