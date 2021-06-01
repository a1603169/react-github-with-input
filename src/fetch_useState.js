import React, { useState } from 'react'
import './App.css';

function App() {

  const [quest, setQuest] = useState([])
  const fetchData = () => {
    fetch('https://opentdb.com/api.php?amount=1')
    .then(response => response.json())
    .then(results => setQuest(results.results[0].question))
  }
  return (
    <div className="App">
      <p>{quest}</p>
      <button onClick={fetchData}>New question</button>
    </div>
  );
}

export default App;
