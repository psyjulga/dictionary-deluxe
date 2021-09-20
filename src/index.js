import React from "react";
import ReactDOM from "react-dom";
import Dictionary from "./Dictionary";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App container">
      <Dictionary />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
