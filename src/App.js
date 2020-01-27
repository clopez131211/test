import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Learn from './pages/Learn';
import Error from "./pages/Error";
import About from './pages/About';

import Navbar from "./components/Navbar";
import Footer from './components/Footer';

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/learn-more" component={Learn} />
        <Route exact path="/about" component={About} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
