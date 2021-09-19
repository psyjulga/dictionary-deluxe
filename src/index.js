import React from "react";
import ReactDOM from "react-dom";
import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App container">
      <header>Header</header>
      <main>
        <Dictionary />
      </main>
      <footer>Footer</footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
