import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div>
      <h1>Welcome to AI Efficiency Gains Portal</h1>
      <p>Identify and implement AI-driven efficiency gains.</p>
      <Link to="/ideation">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default Welcome;