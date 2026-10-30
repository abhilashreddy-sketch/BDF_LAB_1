// ==============================================================================
// Course: Backend Development Fundamentals
// University: Aurora University
// Lab 1: Node.js and Express Server
// Student Name: APPAMPALLY ABHILASH REDDY
// Registration Number: 252U1R5008
// Section: 106_AIDE
// File: http-server.js
// Description: Basic HTTP server built using Node.js built-in 'http' module
// ==============================================================================

const http = require('http');

const PORT = 3000;

// Create HTTP server instance
const server = http.createServer((req, res) => {
  // Set response HTTP status code to 200 (OK) and content-type header
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  
  // Send response body
  res.end('Hello');
});

// Start listening on port 3000
server.listen(PORT, () => {
  console.log(`Node.js HTTP Server is running on http://localhost:${PORT}`);
});
