import React from 'react';
import './style.css';
import { useWorkoutsContext } from '../../hooks/useWorkoutsContext';
import { useAuthContext } from '../../hooks/useAuthContext';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const WorkoutInfo = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const handleDelete = async () => {

    if (!user) {
      return
    }
    
    const response = await fetch(`http://localhost:3000/workouts/${workout._id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
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
        <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
        <span className='delete-btn material-symbols-outlined' onClick={handleDelete}>delete</span>
    </div>
  )
};

export default WorkoutInfo;
