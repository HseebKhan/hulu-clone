import React, { useState } from "react";
import Header from "./Header";

import "./App.css";
import Nav from "./Nav";
import Results from "./Results";
import requests from "./requests";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* Nav */}
      <Nav setSelectedOption={setSelectedOption} />

      {/* Results */}
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
