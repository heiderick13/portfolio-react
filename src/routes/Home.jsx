import Navbar from "../components/Navbar/Navbar";
import AboutMe from "../components/AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";
import MyProjects from "../components/MyProjects/MyProjects";
import Skills from "../components/Skills/Skills";
import Technologies from "../components/Technologies/Technologies";
import Contact from "../components/Contact/Contact";

function Home() {
  return (
    <>
      <AboutMe />
      <MyProjects />
      <Skills />
      <Technologies />
      <Contact />
    </>
  );
}

export default Home;
