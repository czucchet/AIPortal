import React, { useEffect, useState } from 'react';

function Execution() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const storedRecs = localStorage.getItem('recommendations');
    if (storedRecs) {
      setRecommendations(JSON.parse(storedRecs));
    }
  }, []);

  return (
    <div>
      <h1>Execution</h1>
      <h2>AI-Generated Recommendations</h2>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
      <p>Review and prioritize the recommendations above.</p>
    </div>
  );
}

export default Execution;