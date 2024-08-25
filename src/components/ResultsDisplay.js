// src/components/ResultsDisplay.js

import React, { useState } from 'react';

function ResultsDisplay({ response }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (event) => {
    const { options } = event.target;
    const selected = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selected.push(options[i].value);
      }
    }
    setSelectedOptions(selected);
  };

  const renderResponse = () => {
    if (!response) return null;

    return (
      <div>
        {selectedOptions.includes('Numbers') && (
          <div>Numbers: {response.numbers.join(', ')}</div>
        )}
        {selectedOptions.includes('Alphabets') && (
          <div>Alphabets: {response.alphabets.join(', ')}</div>
        )}
        {selectedOptions.includes('Highest Lowercase Alphabet') && (
          <div>Highest Lowercase Alphabet: {response.highest_lowercase_alphabet.join(', ')}</div>
        )}
      </div>
    );
  };

  return (
    <div>
      <select multiple onChange={handleSelectChange}>
        <option value="Numbers">Numbers</option>
        <option value="Alphabets">Alphabets</option>
        <option value="Highest Lowercase Alphabet">Highest Lowercase Alphabet</option>
      </select>
      {renderResponse()}
    </div>
  );
}

export default ResultsDisplay;
