import React from "react";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <main className="relative overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </main>
  );
};

export default App;
