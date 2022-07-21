const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');

app.use('/workouts', workoutRoutes);
app.use('/user', userRoutes);

module.exports = app;

