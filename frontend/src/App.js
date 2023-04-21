import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/").then((response) => {
      setMessage(response.data.message);
    });
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;