import React, { Fragment }from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar.js";
import Home from "./components/pages/Home.js";
import About from "./components/pages/About.js";

import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import './App.css';


function App() {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <Fragment>
              <Navbar title="Contact Keeper" icon="fas fa-id-card-alt" />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                </Switch>
              </div>
          </Fragment>
        </Router>
      </ContactState>
    </AuthState>
  );
}

export default App;
