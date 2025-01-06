Prerequisites
Before you begin, ensure you have the following installed on your machine:

Node.js (v16 or higher)

Download and install from nodejs.org.

npm (comes bundled with Node.js)

Verify installation by running:
bash
    node -v
    npm -v

#########################################################################################################

Step 1: Clone the Repository
1. Clone the repository (if available) or download the frontend code.
bash
    git clone <repository-url>
    cd <repository-folder>
2. Navigate to the frontend folder:
bash
    cd frontend

Step 2: Install Dependencies
bash
    npm install

This will install:
-React
-React Router DOM
-Other necessary packages.

Step 3: Run the Frontend Application
Start the development server:
bash
    npm start

The app will automatically open in your default browser at http://localhost:3000.
If it doesn’t open automatically, manually navigate to http://localhost:3000.

Step 4: Test the Application
1 Welcome Screen:
    You’ll see a chat-like interface where the mock LLM asks questions.
    Type your responses in the input box and click "Send."
    The mock LLM will simulate responses and guide you through the conversation.
2 Proceed to Ideation:
    After the conversation, click the "Get Started" button to navigate to the Ideation screen.

#########################################################################################################

Folder Structure
Here’s a quick overview of the frontend folder structure:

frontend/
  ├── src/
  │     ├── App.js              # Main application component
  │     ├── components/         # React components
  │     │     ├── Welcome.js    # Welcome screen with mock LLM
  │     │     ├── Ideation.js   # Ideation screen (placeholder)
  │     │     └── Execution.js  # Execution screen (placeholder)
  │     └── index.js            # Entry point for the React app
  ├── public/
  │     └── index.html          # HTML template
  └── package.json              # Frontend dependencies and scripts

Key Features to Review
Welcome Screen:
Chat-like interface with mock LLM interaction.
Simulated questions and responses.
"Get Started" button to proceed to the Ideation screen.
UI/UX:
Clean and intuitive design.
Responsive layout for different screen sizes.  

Troubleshooting
Port Conflict:
If port 3000 is already in use, the app will prompt you to use another port. Confirm by typing Y.
Missing Dependencies:
If you encounter errors related to missing dependencies, run:
bash
    npm install
Browser Issues:
Ensure you’re using a modern browser (e.g., Chrome, Firefox, Edge).
Clear your browser cache if the app doesn’t load correctly.

Next Steps
Once you’re satisfied with the frontend, we can proceed with:
    1. Backend Integration: Connect the frontend to a backend server.
    2. LLM Integration: Replace the mock LLM with a real LLM (e.g., OpenAI GPT).
