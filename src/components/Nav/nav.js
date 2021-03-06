import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

// Style
import "./style.scss";

export default function Nav() {
  const [toggleState, setToggleState] = useState(false);

  const toggle = () => {
    setToggleState(toggleState === false ? true : false);
  };

  return (
    <header>
      <div className="logo" onClick={toggle}>
        <Link to="/">
          <img src="/images/colchis.png" alt="Colchis logo" />
        </Link>
      </div>

      <nav>
        <i className="fa fa-bars" aria-hidden="true" onClick={toggle} />
        <ul className={`collapsed ${toggleState ? "is-expanded" : ""}`}>
          <NavLink activeClassName="active" onClick={toggle} to="/">
            <li>home</li>
          </NavLink>
          <NavLink activeClassName="active" to="/about" onClick={toggle}>
            <li>about</li>
          </NavLink>
          <NavLink activeClassName="active" to="/asset" onClick={toggle}>
            <li>asset</li>
          </NavLink>
          <NavLink activeClassName="active" to="/gallery" onClick={toggle}>
            <li>gallery</li>
          </NavLink>
          <NavLink activeClassName="active" to="/contact" onClick={toggle}>
            <li>contact</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
