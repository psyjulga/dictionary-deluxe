import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);

  function handleInputChange(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  return (
    <div className="Dictionary">
      <h1 className="mb-3 mt-3">Dictionary Deluxe</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          className="input-field"
          autoFocus={true}
          type="search"
          placeholder="enter a word .."
        />
        <input className="search-button" type="submit" value="show results" />
      </form>
      <Results data={results} />
    </div>
  );
}
