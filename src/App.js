import React from 'react';
import './App.css';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ProjectMaster from "./components/ProjectMaster";
import Footer from "./components/Footer";

// import './App.css';

function App() {
  return (
    <div className="App" media="all">
      <Header />
      <AboutMe />
      <ProjectMaster />
      <Footer />
    </div>
  );
}

export default App;
