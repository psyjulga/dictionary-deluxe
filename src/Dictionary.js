import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");

  function handleInputChange(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary Deluxe</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          className="input-field"
          autoFocus={"true"}
          type="search"
          placeholder="your word"
        />
        <input className="search-button" type="submit" value="look me up" />
      </form>
    </div>
  );
}
