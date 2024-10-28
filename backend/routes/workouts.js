const express = require('express')

const router = express.Router()


// GET all workouts
router.get('/', (req, res) => {
    res.json({mssg:'GET all workouts'})
})


// GET a workout
router.get('/:id', (req, res) => {
    res.json({mssg:''})
})

//POST a workout
router.post('/:id', (req, res) => {
    res.json({mssg:''})
})

//DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({mssg:'delete'})
})
// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg:''})
})

module.exports = router