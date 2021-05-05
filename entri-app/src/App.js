import React from "react";
import "./App.css";
import "./style/site.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <div className="App tk-sofia-pro">
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
