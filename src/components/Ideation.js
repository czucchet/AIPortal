import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Ideation() {
  const [formData, setFormData] = useState({
    industry: '',
    area: '',
    process: '',
    painPoints: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/recommendations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      // Store recommendations in local storage for the Execution screen
      localStorage.setItem('recommendations', JSON.stringify(data.recommendations));
      navigate('/execution');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <h1>Ideation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Industry:
            <input
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Area (finance, compliance, legal):
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Current Processes:
            <textarea
              name="process"
              value={formData.process}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Pain Points/Challenges:
            <textarea
              name="painPoints"
              value={formData.painPoints}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Ideation;