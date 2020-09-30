import React from "react";

import "./Nav.css";
import requests from "./requests";

function Nav({ setSelectedOption }) {
  return (
    <div className="nav">
      <h4 onClick={() => setSelectedOption(requests.fetchTrending)}>
        Trending
      </h4>
      <h4 onClick={() => setSelectedOption(requests.fetchTopRated)}>Top</h4>
      <h4 onClick={() => setSelectedOption(requests.fetchActionMovies)}>
        Action
      </h4>
      <h4 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>
        Comedy
      </h4>
      <h4 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>
        Horror
      </h4>
      <h4 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>
        Romance
      </h4>
      <h4 onClick={() => setSelectedOption(requests.fetchMystery)}>Mystery</h4>
      <h4 onClick={() => setSelectedOption(requests.fetchSciFi)}>Sci-Fi</h4>
      <h4 onClick={() => setSelectedOption(requests.fetchWestern)}>Western</h4>
      <h4 onClick={() => setSelectedOption(requests.fetchAnimation)}>
        Animation
      </h4>
      <h4 onClick={setSelectedOption(requests.fetchTV)}>Movie</h4>
    </div>
  );
}

export default Nav;
