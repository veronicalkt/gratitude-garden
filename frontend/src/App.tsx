import React, { useState } from "react";
import "./App.css";

import QueryBox from "./components/QueryBox";

function App() {
  return (
    <div>
      <QueryBox />
      <br />
      <textarea
        placeholder= "Enter your journling response here"
        rows={6} // Adjust the number of rows as needed
        cols={100} // Adjust the number of columns as needed
      />
      <br />
    </div>
  );
}

export default App;
