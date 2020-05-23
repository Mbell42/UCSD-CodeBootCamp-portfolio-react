import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";


function App() {
    return (
      <Router>
        <div>
            <Navbar />
            <Route exact path="/" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/gallery" component={Gallery} />
        </div>
      </Router>
    );
  }
  
  export default App;