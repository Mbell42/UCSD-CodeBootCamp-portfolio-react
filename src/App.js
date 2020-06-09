import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import NavWrap from "./components/NavWrap";
import NavBar from "./components/Navbar";


function App() {
    return (
      <Router>
            <NavBar />
            <NavWrap>
              <Route path="/" component={About} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/gallery" component={Gallery} />
            </NavWrap>
      </Router>
    );
  }
  
  export default App;