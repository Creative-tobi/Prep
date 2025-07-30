import About from "../pages/About";
import Contact from "../pages/Contact";
import Donate from "../pages/Donate";
import Home from "../pages/Home";
import Video from "../pages/Video";
import Navbar from "./Navbar";


function LandingPage() {
  return (
    <>
     <Navbar />
     <Home />
      <About />
      <Video />
      <Donate />
      <Contact />
    </>
  );
}

export default LandingPage;
