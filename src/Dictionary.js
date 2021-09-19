import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");

  function handleInputChange(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary Deluxe</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          className="input-field"
          autoFocus={true}
          type="search"
          placeholder="your word"
        />
        <input className="search-button" type="submit" value="look me up" />
      </form>
    </div>
  );
}
