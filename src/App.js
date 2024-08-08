import About from "./Components/About";
import Contact from "./Components/Contact";
import Copyright from "./Components/Copywrite";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Skills from "./Components/Skills";


const App = () => {
  return (
    <>
    

    <Navbar/>
    <Home />
    <About />
    <Skills />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
    <Copyright />
      </>
  );
};
export default App;