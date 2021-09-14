import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App container">
      <h1>Dictionary Deluxe</h1>
      <form>
        <input
          className="input-field"
          autoFocus={"true"}
          type="text"
          placeholder="your word"
        />
        <input className="search-button" type="submit" value="look me up" />
      </form>
    </div>
  );
}
