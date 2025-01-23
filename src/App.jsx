import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import { LanguProvider } from "./context/Langtoggle";

const App = () => {
  return (
    <div>
      <LanguProvider>
        <Header />
        <Home />
        <About />
        <Project />
        <ContactPage />
        <Footer />
      </LanguProvider>
    </div>
  );
};

export default App;
