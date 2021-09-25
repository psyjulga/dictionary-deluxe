import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.myKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function startAxiosCall() {
    let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001eab22b64cb92448b94c26877ebc4078c";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
        <Photos data={photos} />
      </div>
    );
  } else {
    load();
    return <div>loading..</div>;
  }
}
