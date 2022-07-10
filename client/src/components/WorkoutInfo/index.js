import React from 'react';
import './style.css';

const WorkoutInfo = ({workout}) => {
  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><span className='workout-bold'>Weight (kg): </span>{workout.load}</p>
        <p><span className='workout-bold'>Reps: </span>{workout.reps}</p>
        <p><span className='workout-bold'>Sets: </span>{workout.sets}</p>
        <p>{workout.createdAt}</p>
    </div>
  )
};

export default WorkoutInfo;
