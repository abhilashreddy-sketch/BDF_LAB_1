// ==============================================================================
// Course: Backend Development Fundamentals
// University: Aurora University
// Lab 1: Node.js and Express Server
// Student Name: APPAMPALLY ABHILASH REDDY
// Registration Number: 252U1R5008
// Section: 106_AIDE
// File: server.js
// Description: Express.js server implementing GET endpoints & 404 handling
// ==============================================================================

const express = require('express');

// Initialize the Express application
const app = express();

// Configure the port from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Built-in middleware to parse incoming JSON payloads (good practice)
app.use(express.json());

// Format JSON responses with 2-space indentation for clean browser display
app.set('json spaces', 2);

// ------------------------------------------------------------------------------
// Task 5: API Endpoints Implementation
// ------------------------------------------------------------------------------

/**
 * Route: GET /
 * Description: Root endpoint returning a welcome message
 * HTTP Status: 200 OK
 */
app.get('/', (req, res) => {
  res.status(200).send('Welcome to My Node.js and Express Server!');
});

/**
 * Route: GET /about
 * Description: About endpoint returning student and lab metadata
 * HTTP Status: 200 OK
 */
app.get('/about', (req, res) => {
  res.status(200).json({
    name: 'APPAMPALLY ABHILASH REDDY',
    section: '106_AIDE',
    course: 'Backend Development Fundamentals',
    lab: 'Lab 1: Node.js and Express Server'
  });
});

/**
 * Route: GET /time
 * Description: Time endpoint returning the current server date and time
 * HTTP Status: 200 OK
 */
app.get('/time', (req, res) => {
  const currentTime = new Date();
  res.status(200).json({
    currentTime: currentTime
  });
});

// ------------------------------------------------------------------------------
// Task 6: 404 Error Handling Middleware
// Registered after all valid routes to catch any unmatched requests
// ------------------------------------------------------------------------------
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: '404 - Route Not Found'
  });
});

// ------------------------------------------------------------------------------
// Server Initialization
// Binding to 0.0.0.0 enables proper hosting across local and cloud environments (e.g., Render)
// ------------------------------------------------------------------------------
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Express Server is running on port ${PORT}`);
  console.log(`Local Access: http://localhost:${PORT}`);
});
