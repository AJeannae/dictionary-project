import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    // console.log(response.data[0].meanings[0].definitions[0]);
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    // Documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1 className="text-uppercase">Dictionary 📖</h1>
      <div className="form">
        <form onSubmit={search}>
          <h2>What would you like to look up?</h2>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
          />
          <input type="submit" value="🔍" className="submit-button" />
        </form>
        <Results results={results} />
      </div>
    </div>
  );
}
