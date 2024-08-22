import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <main>
      <header>
        <NavBar />
        <Hero />
      </header>
      <hr className="custom" />
      <section>
        <AboutMe />
      </section>
      <hr className="custom" />
      <section>
        <Projects />
      </section>
      <hr className="custom" />
      <section>
        <Contact />
      </section>
      <footer>
      <Footer />
      </footer>
    </main>
  );
};

export default App;
