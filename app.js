const express = require('express');
const errorHandlingMiddleware = require('./middleware/errorHandling.middleware');
const routes = require('./routes');

const app = express();
// Middleware to parse JSON bodies
app.use(express.json())

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }))

app.use(errorHandlingMiddleware);

// routes
app.use('/api', routes)

module.exports = app;