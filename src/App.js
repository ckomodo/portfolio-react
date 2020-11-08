import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home/index";
import Navbar from "./components/Navbar/index"
import Contact from "./components/pages/Contact/index"
import "./App.css"

function App() {
  return (
    <div className = "App">
    <Router>
    
      <Navbar />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/contact">
          <h1>Contact</h1>
          <Contact />
        </Route>
        <Route exact path="/portfolio">
          <h1>Portfolio page</h1>
        </Route>
        <Route exact path="/">
        <Home />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
