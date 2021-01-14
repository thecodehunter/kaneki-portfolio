import "./App.css";
import Header from "./components/Header";
import MainSection from "./sections/MainSection";
import TechnologySection from "./sections/TechnologySection";
import React from "react";
import BlogSection from "./sections/BlogSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <TechnologySection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
