// IMPORT EXPRESS IN ORDER TO CREATE OUR EXPRESS APPLICATION
const express = require('express');

// Import mrMom Controllers
const{
    createMrMom,
    getMrMoms,
    getMrMom,
    deleteMrMom,
    updateMrMom
} = require('../controllers/mrMomControllers')

// CREATE mrMom ROUTER
const router = express.Router()

// Get all mrMoms
router.get('/', getMrMoms) 

// Get a single mrMoms
router.get('/:id', getMrMom)

// Post/create a new mrMom
router.post('/', createMrMom)

// Delete a mrMom
router.delete('/:id', deleteMrMom)

// Update a mrMom
router.patch('/:id', updateMrMom)

// EXPORT ROUTER
module.exports = router