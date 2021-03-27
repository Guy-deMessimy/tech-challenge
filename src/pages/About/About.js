import React from "react";
import Header from "../../components/About/header";
import UserCard from "../../components/About/userCards";
import Footer from "../../components/About/footer";

// styles
import "./style.scss";

function About() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <UserCard />
        <Footer />
      </div>
    </div>
  );
}

export default About;