// IMPORT EXPRESS IN ORDER TO CREATE OUR EXPRESS APPLICATION
const express = require('express');


const router = express.Router()

// Get all mrMoms
router.get('/', (req, res) => {
    res.json({mssg: 'Get all mrMoms'})
});

// Get a single mrMoms
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get a single mrMom'})
})

// Post/create a new mrMom
router.post('/', (req, res) => {
    res.json({messg: 'Create a new mrMom'})
})

// Delete a mrMom
router.delete('/:id', (req, res) => {
    res.json({messg: 'Delete a new mrMom'})
})

// Update a mrMom
router.patch('/:id', (req, res) => {
    res.json({messg: 'Update a new mrMom'})
})


module.exports = router