// src/App.js

import React, { useState } from 'react';
import JsonInput from './components/JsonInput';
import ResultsDisplay from './components/ResultsDisplay';
import './App.css';

function App() {
  const [response, setResponse] = useState(null);

  return (
    <div className="App">
      <h1>{response ? response.roll_number : 'Enter Your Data'}</h1>
      <JsonInput onResponse={setResponse} />
      <ResultsDisplay response={response} />
    </div>
  );
}

export default App;
