import React from "react";
import { Route } from "react-router-dom";

// Style
import "./styles.scss";

// Components
import Nav from "./components/Nav";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact/Contact";
import Asset from "./pages/Asset/Asset";

function App() {
  return (
    <div>
      <Nav />
      <div className="">
        <Route exact={true} path="/" component={Home} />
        <Route exaxt path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/asset" component={Asset} />
      </div>
    </div>
  );
}

export default App;
