import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import MyProjects from "./components/MyProjects/MyProjects";
import Skills from "./components/Skills/Skills";
import Technologies from "./components/Technologies/Technologies";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <MyProjects />
      <Skills />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
