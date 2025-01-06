import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Ideation from './components/Ideation';
import Execution from './components/Execution';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/ideation" element={<Ideation />} />
        <Route path="/execution" element={<Execution />} />
      </Routes>
    </Router>
  );
}

export default App;