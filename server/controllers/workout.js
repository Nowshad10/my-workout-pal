const Workout = require('../models/workoutModel');

async function getAllWorkouts(req, res) {
    try {
        const workouts = await Workout.find({}).sort({createdAt: -1});
        res.status(200).json(workouts);
    } catch (error) {
        res.status(500).send(error);
    };
};

async function getAWorkout(req, res) {
    try {
        const { id } = req.params;
        const workout = await Workout.findById(id);
        res.status(200).json(workout);
    } catch (error) {
        res.status(404).json({"error": "No workout with this ID exists!"});
    };
};

async function postWorkout(req, res) {
    const { title, reps, load, sets } = req.body;
    try {
        const workout = await Workout.create({title, reps, load, sets});
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

async function deleteWorkout(req, res) {
    try {
        const workout = await Workout.findOneAndDelete({_id: req.params.id});
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({"error": "Error deleting this workout."});
    };
};

async function updateWorkout(req, res) {
    try {
        const workout = await Workout.findOneAndUpdate({_id: req.params.id}, {
            ...req.body
        });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({"error": "Error updating workout."});
    };
};

module.exports = { getAllWorkouts, getAWorkout, postWorkout, deleteWorkout, updateWorkout };
