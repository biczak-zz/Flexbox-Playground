/* IMPORTS */
require('dotenv').config();
const {
  join
} = require('path');
const express = require('express');

/* SERVER CONFIGURATION */
const app = express();

// Set the Port to the defined environmental variable, or default to 8080
const port = process.env.PORT || 8080;

// Serve the Static Webpack Files from the Frontend's 'dist' folder
app.use(express.static(join(__dirname, '../../frontend/dist')));

// Start the Server at the defined Port
app.listen(port, () => console.log(`Flexbox Playground is live at http://localhost:${port}`));