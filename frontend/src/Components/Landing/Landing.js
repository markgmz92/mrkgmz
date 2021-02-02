import React from "react";
import NavBar from "../Navigation/NavBar";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";

const Landing = () => {
  return (
    <div>
      <NavBar />
      <About />
      <Portfolio />
      <Blog />
      <Footer />
    </div>
  );
};

export default Landing;
