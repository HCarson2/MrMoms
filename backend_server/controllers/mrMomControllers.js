// IMPORT DATA MODEL
const MrMom = require('../models/mrMomModel')

// IMPORT MONGOOSE 
const mongoose = require('mongoose')

// Get all mrMoms
const getMrMoms = async (req, res) => {
    const mrMoms = await MrMom.find({}).sort({createdAt: -1}) // Sorting by newest date first

    res.status(200).json(mrMoms)  
} 

// Get a single mrMom
const getMrMom = async (req, res) => {
    const {id} = req.params

    // This method checks to see if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'MrMom job not found'})
    }

    const mrMom = await MrMom.findById(id)

    // If MrMom job doesn't exist send error message
    if (!mrMom) {
        return res.status(404).json({error: 'MrMom job not found'})
    }

    res.status(200).json(mrMom)
}

// Create a new mrMom
const createMrMom = async (req, res) => {
    const {title, task, chore} = req.body

    // Add doc to Database
    try {
      const mrMom = await MrMom.create({title, task, chore})
      res.status(200).json(mrMom)  
    } catch (error) {
      res.status(400).json({error: error.message})  
    }
}

// Delete a mrMom
const deleteMrMom = async (req, res) => {
    const {id} = req.params
    
    // This method checks to see if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'MrMom job not found'})
    }

    const mrMom = await MrMom.findOneAndDelete({_id: id})

    if (!mrMom) {
        return res.status(404).json({error: 'MrMom job not found'})
    }

    res.status(200).json(mrMom)
}

// Update a mrMom
const updateMrMom = async (req, res) => {
    const {id} = req.params
    
    // This method checks to see if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'MrMom job not found'})
    }

    // The 1st argument is the find criteria / The 2nd argument represents an object that I want to update
    const mrMom = await MrMom.findOneAndUpdate({_id: id}, {
        // This spreads the properties of the former object into this new object
        ...req.body
    })

    if (!mrMom) {
        return res.status(404).json({error: 'MrMom job not found'})
    }

    res.status(200).json(mrMom)



}

// Export Functions / Controllers
module.exports = {
    getMrMoms,
    getMrMom,
    createMrMom,
    deleteMrMom,
    updateMrMom
}