import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    // console.log(response.data[0].meanings[0].definitions[0]);
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search() {
    // Documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1 className="text-uppercase">Dictionary 📖</h1>
        <div className="form">
          <section>
            <form onSubmit={handleSubmit}>
              <h2>What word would you like to look up?</h2>
              <input
                type="search"
                autoFocus={true}
                onChange={handleKeywordChange}
                defaultValue={props.defaultKeyword}
              />
              <input type="submit" value="🔍" className="submit-button" />
            </form>
            <div className="hint">Suggested words: sunset, wine, yoga...</div>
          </section>
          <Results results={results} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
