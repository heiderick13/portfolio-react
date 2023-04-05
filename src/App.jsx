import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
