const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workout');
const requireAuth = require('../middleware/requireAuth');

router.use(requireAuth);

router.get('/', workoutController.getAllWorkouts);

router.get('/:id', workoutController.getAWorkout);

router.post('/', workoutController.postWorkout);

router.delete('/:id', workoutController.deleteWorkout);

router.patch('/:id', workoutController.updateWorkout);

module.exports = router;
