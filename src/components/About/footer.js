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
            rel="author techchallenge "
          >
           Guy de Messimy
          </a>
          , Just a back to the future render by calling API
        </p>
      </footer>
    );
  }
}

export default Footer;