// src/components/JsonInput.js

import React, { useState } from 'react';

function JsonInput({ onResponse }) {
  const [jsonData, setJsonData] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/bfhl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: JSON.parse(jsonData) }),
      });

      const result = await response.json();
      onResponse(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={jsonData}
        onChange={(e) => setJsonData(e.target.value)}
        placeholder="Enter JSON data"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default JsonInput;
