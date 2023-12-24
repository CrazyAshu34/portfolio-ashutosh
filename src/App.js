import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills";
import Works from "./Components/Works/Works";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}
