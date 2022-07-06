// IMPORT DOTENV MODULE TO CONNECT TO OUR CONFIG FILE
require('dotenv').config()

// IMPORT EXPRESS IN ORDER TO CREATE OUR EXPRESS APPLICATION
const express = require('express');
const mrMomRoutes = require('./routes/mrMoms')

// CREATE A VARIABLE TO HOLD OUR EXPRESS METHODS
const app = express();

// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/mrMoms', mrMomRoutes)

// Listen for request
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})
