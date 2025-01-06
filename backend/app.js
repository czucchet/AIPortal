const express = require('express');
const app = express();
const port = 5000;

// Middleware
app.use(express.json());

// Mock AI recommendations
const recommendationsData = {
  finance: {
    'invoice processing': 'Automate invoice processing using RPA to reduce processing time by 50%.',
    'expense reporting': 'Implement AI-driven expense reporting to reduce errors and streamline approval.'
  },
  compliance: {
    'regulatory reporting': 'Use AI to monitor and report regulatory compliance in real-time, reducing the risk of non-compliance.',
    'audit management': 'Automate audit management processes to improve accuracy and reduce manual effort.'
  },
  legal: {
    'contract review': 'Employ AI to analyze contracts for potential risks and compliance issues, speeding up the review process.',
    'document management': 'Implement AI-driven document management to improve organization and accessibility of legal documents.'
  }
};

app.post('/api/recommendations', (req, res) => {
  const { area, process } = req.body;
  const areaLower = area.toLowerCase();
  const processLower = process.toLowerCase();
  const recommendations = recommendationsData[areaLower] || {};
  const recommendation = recommendations[processLower] || 'No specific recommendation available at this time.';
  res.json({ recommendations: [recommendation] });
});

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});