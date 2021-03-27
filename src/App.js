import React from "react";
import { Route } from "react-router-dom";

// Style
import "./styles.scss";

// Components
import Nav from "./components/Nav/nav";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import DemoCarousel from './pages/Carousel/carousel'
import Asset from "./pages/Asset/Asset";

function App() {
  return (
    <div>
      <Nav />
      <div className="">
        <Route exact={true} path="/" component={Home} />
        <Route exaxt path="/about" component={About} />
        <Route exact path="/asset" component={Asset} />
        <Route exact path="/gallery" component={DemoCarousel} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </div>
  );
}

export default App;
