import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import project1 from "./assets/img/pfp.png";
import project2 from "./assets/img/pfp.png";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <AboutMe />
    <App />
    <Card
      name="Product Preview"
      foto={project1}
      description="Página de preview de um perfume desenvolvida com HTML e CSS"
    />
    <Card
      name="Página de Login"
      foto={project2}
      description="Página de login com HTML e CSS"
    />
    <Footer />
  </React.StrictMode>
);
