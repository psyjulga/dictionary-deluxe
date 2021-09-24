import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.myMood);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function startAxiosCall() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function load() {
    setLoaded(true);
    startAxiosCall();
  }

  function handleSubmit(event) {
    event.preventDefault();
    startAxiosCall();
  }

  function handleInputChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1 className="mb-4 mt-4">Dictionary Deluxe</h1>
        <form className="search-form mb-5" onSubmit={handleSubmit}>
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
  } else {
    load();
    return <div>loading..</div>;
  }
}
