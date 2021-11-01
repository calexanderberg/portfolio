import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './resources/Components/Home';
import Story from './resources/Components/Story'
import About from './resources/Components/About';
import Work from './resources/Components/Work';
import Contact from './resources/Components/Contact';
import KTH from './resources/Components/KTH';
import Codecademy from './resources/Components/Codecademy';
import Header from './resources/Components/Header';
import Footer from './resources/Components/Footer';

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
              <Route path="/kth">
                <KTH />
              </Route>
              <Route path="/codecademy">
                <Codecademy />
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
