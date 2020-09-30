import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import axios from "./axios";
import FlipMove from "react-flip-move";

import "./Results.css";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // runs this code only once when the component loads/ mounts, when [] is provided with some data then it renders whenever the value inside [] changes
    async function fetchData() {
      const request = await axios.get(selectedOption);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}
export default Results;
