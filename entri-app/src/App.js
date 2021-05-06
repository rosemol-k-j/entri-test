import React from "react";
import "./App.css";
import "./style/site.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container/Container";
function App() {
  return (
    <Router>
      <div className="App tk-sofia-pro">
        <Route exact path="/" component={Container} />
      </div>
    </Router>
  );
}

export default App;
