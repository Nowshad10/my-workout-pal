const Workout = require('../models/workoutModel');

async function postWorkout(req, res) {
    const {title, reps, load, sets} = req.body;
    try {
        const workout = await Workout.create({title, reps, load, sets});
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

module.exports = { postWorkout };
