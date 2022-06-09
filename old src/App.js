import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'

import "./App.css";

import Home from "./resources/Components/Home";
import Story from "./resources/Components/Story";
import About from "./resources/Components/About";
import Work from "./resources/Components/Work";
import Contact from "./resources/Components/Contact";
import Header from "./resources/Components/Header";
import Footer from "./resources/Components/Footer";

function App() {
  return (
    <div>
      <Router>
        <div className="Header">
          <Header />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/story">
                <Story />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/work">
                <Work />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
