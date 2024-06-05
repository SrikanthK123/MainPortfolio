import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import FooterBox from './components/FooterBox';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import MainHomePage from './components/MainHomePage';
import AllAboutMeComponents from './components/AllAboutMeComponents';

function App() {
  return (
    <>
    { /* <Navbar />
      <Home/>
      <About />
      <Projects />
      <Certificates />
  <Skills />*/}
      <MainHomePage />
     <FooterBox />
      </>
  );
}

export default App;
