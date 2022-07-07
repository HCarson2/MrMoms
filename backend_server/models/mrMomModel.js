// IMPORT MONGOOSE IN ORDER TO CREATE A MODEL
const mongoose = require('mongoose');

// Use schema to create model
const Schema = mongoose.Schema

// Before you can create your model you need to create a schema
const mrMomSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    task: {
        type: String,
        required: true
    },
    chore: {
        type: String,
        required: true
    }
}, {timestamps: true})

// EXPORT MODEL TO CONTROLLER FILE
module.exports = mongoose.model('MrMom', mrMomSchema)
