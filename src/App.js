import React from 'react';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ProjectMaster from "./components/ProjectMaster";
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <ProjectMaster />
      <Footer />
    </div>
  );
}

export default App;
