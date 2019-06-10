import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Entry from './components/Entry';

function App() {
  return (
    <Router>
      <div> 
        <Route path="/" exact component={Entry} />
        <Route path="/home" component={Home} />
      </div>
    </Router>
  );
}

export default App;