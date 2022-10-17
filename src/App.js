import React, {Component} from "react";
import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render(){
    return (
      <HashRouter>
      <div className="App">
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/resume">Resume</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li id="name">Ciara Gauntt</li>
          </ul>
          <div className="content">
            <Routes>
             <Route path="/" element={<Home />}/>
             <Route path="/About" element={<About />}/>
             <Route path="/projects" element={<Projects />}/>
             <Route path="/resume" element={<Resume />}/>
             <Route path="/contact" element={<Contact />}/>
             </Routes>
          </div>
            <ul className="footer">
              <li><a href="https://github.com/ciaragauntt">GITHUB</a></li>
              <li><a href="https://www.linkedin.com/in/ciara-gauntt-01404618b/">LINKEDIN</a></li>
            </ul>
        </div>
        </HashRouter>
    );
  }
}

export default App;
