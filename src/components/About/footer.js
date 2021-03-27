import React, { Component } from "react";

class Footer extends Component {
  year = () => {
    let d = new Date();
    return d.getFullYear();
  };

  render() {
    return (
      <footer className="clearfix mt-4">
        <p>
          &copy; {this.year()}
          <a
            href="https://github.com/Guy-deMessimy"
            target="popup"
            onclick="window.open('https://github.com/Guy-deMessimy','name','width=600,height=400')"
            rel="author techchallenge "
          >
            Guy de Messimy
          </a>
          , back to the future by random user API
        </p>
      </footer>
    );
  }
}

export default Footer;
