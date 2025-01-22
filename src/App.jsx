import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Project />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default App;
