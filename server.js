/**
 * @file server.js
 *
 * Serves the compiled frontend of our application.
 */

// Imports
const path = require('path');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const hsc = require('http-status-codes');

// Path to Dist
const pathToDist = path.join(process.cwd(), 'dist');
const pathToIndex = path.join(pathToDist, 'index.html');

// Express and Middleware
const app = express();
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.static(pathToDist));

// Catch-all Route
app.get('*', (req, res) => {
  return res.sendFile(pathToIndex);
});

// Error Route
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const statusText = hsc.getStatusText(statusCode);

  if (process.env.NODE_ENV === 'development') {
    return res.status(statusCode).json({
      statusCode,
      statusText,
      message: err.message,
      stack: err.stack
    });
  } else {
    return res
      .status(statusCode)
      .send(`<h1>${statucCode} - ${statusText}</h1>`);
  }
});

// Listen
const port = process.env.PORT || 3000;
app.listen(port, err => {
  if (err) throw err;
  console.log(`Listening on port #${port}...`);
});
