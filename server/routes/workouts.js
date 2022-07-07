const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workout');
// const Workout = require('../models/workoutModel');

router.get('/', (req, res) => {
    res.json({msg: 'GET all workouts'})
});

router.get('/:id', (req, res) => {
    res.json({msg: 'GET single workout'})
});

router.post('/', workoutController.postWorkout);

router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE a workout'})
});

router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATE a workout'})
});

module.exports = router;
