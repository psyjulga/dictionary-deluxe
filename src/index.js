import React from "react";
import ReactDOM from "react-dom";
import Dictionary from "./Dictionary";
import Footer from "./Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App container">
      <Dictionary myMood="just" />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
