import React, { useState } from "react";

import "./App.css";
import Axios from "axios";
function App() {
  const [name, setName] = useState();
  const [file, setFile] = useState();

  const send = event => {
    const data = new FormData();
    data.append("name", name);
    data.append("file", file);

    Axios.post("https://localhost:3000/upload", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <form action="#">
          <div className="flex">
            <label htmlFor="name">Book Name</label>
            <input
              type="text"
              id="name"
              onChange={event => {
                const { value } = event.target;
                setName(value);
              }}
            />
          </div>
          <div className="flex">
            <label htmlFor="file">Upload File</label>
            <input
              type="file"
              id="file"
              accept=".pdf"
              onChange={event => {
                const file = event.target.files[0];
                setFile(file);
              }}
            />
          </div>
        </form>
        <button onClick={send}>Upload</button>
      </header>
    </div>
  );
}

export default App;
