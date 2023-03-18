import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import MyProjects from "./components/MyProjects/MyProjects";
import Skills from "./components/Skills/Skills";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <AboutMe />
    {/* <App /> */}
    <MyProjects />
    <Skills />
    <Footer />
  </React.StrictMode>
);
