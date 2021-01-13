import './App.css';
import Header from "./components/Header";
import MainSection from "./sections/MainSection";
import TechnologySection from "./sections/TechnologySection";
import React from "react";
import BlogSection from "./sections/BlogSection";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <TechnologySection />
      <BlogSection />
    </div>
  );
}

export default App;
