import React from 'react';
import './style.css';
import { useWorkoutsContext } from '../../hooks/useWorkoutsContext';

const WorkoutInfo = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:3000/workouts/${workout._id}`, {
      method: 'DELETE'
    })
    const responseJson = await response.json();

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: responseJson})
    }
  }
  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><span className='workout-bold'>Weight (kg): </span>{workout.load}</p>
        <p><span className='workout-bold'>Reps: </span>{workout.reps}</p>
        <p><span className='workout-bold'>Sets: </span>{workout.sets}</p>
        <p>{workout.createdAt}</p>
        <span className='delete-btn' onClick={handleDelete}>delete</span>
    </div>
  )
};

export default WorkoutInfo;
