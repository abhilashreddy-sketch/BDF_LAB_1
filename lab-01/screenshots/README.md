# Lab 1 Screenshots Checklist

This directory is reserved for capturing and storing evidence screenshots of the running servers and API responses.

## Required Screenshots Checklist

| Filename | Description | Route / View | Expected Result |
| :--- | :--- | :--- | :--- |
| `01-home-endpoint.png` | GET Root Route | `http://localhost:3000/` | Displays `Welcome to My Node.js and Express Server!` with Status 200 OK |
| `02-about-endpoint.png` | GET About Route | `http://localhost:3000/about` | Displays student and course JSON data with Status 200 OK |
| `03-time-endpoint.png` | GET Time Route | `http://localhost:3000/time` | Displays current server timestamp JSON with Status 200 OK |
| `04-404-endpoint.png` | GET Undefined Route | `http://localhost:3000/invalid` | Displays 404 Route Not Found JSON error with Status 404 |
| `05-server-running.png` | Terminal Server Logs | VS Code Terminal | Displays console messages confirming HTTP and Express servers running |

> **Note**: Take screenshots using **Windows Shortcut: `Win + Shift + S`** while running the servers locally, and save them in this folder with the exact filenames listed above.
