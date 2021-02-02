import React from "react";
import NavBar from "../Navigation/NavBar";
import Home from "../Home/Home";
import About from "../About/About";
import PortFolio from "../PortFolio/PortFolio";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";

const Landing = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <PortFolio />
      <Blog />
      <Footer />
    </div>
  );
};

export default Landing;
