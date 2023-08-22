import About from "./Components/About";
import Achievement from "./Components/Achievement";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Intro from "./Components/Intro";
import NavBar from "./Components/NavBar";
import Project from "./Components/Project";

const App = () => {
  return (
    <div>
      <NavBar />
      <Intro />
      <About />
      <Project />
      <Achievement />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
