// IMPORT DOTENV MODULE TO CONNECT TO OUR CONFIG FILE
require('dotenv').config()

// IMPORT EXPRESS IN ORDER TO CREATE OUR EXPRESS APPLICATION
const express = require('express');

// IMPORT MONGOOSE IN ORDER TO CONNECT TO OUR DATABASE
const mongoose = require("mongoose");

const mrMomRoutes = require('./routes/mrMoms')

// CREATE A VARIABLE TO HOLD OUR EXPRESS METHODS
const app = express();

// Middleware|| Looking for body
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/mrMoms', mrMomRoutes)

const DB = mongoose
  .connect(
    process.env.DATABASE.replace("<password>", process.env.PASSWORD),
    // {
    //   useCreateIndex: true,
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useFindAndModify: false,
    // }
  )
  .then(() => {
    console.log("DATABASE IS UP AND RUNNING...");
  })
  .catch((error) => {
    console.log(error.message);
  });


// Listen for request
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})
