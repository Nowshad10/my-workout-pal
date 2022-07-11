import React, { useState } from 'react';
import './style.css';
import { useWorkoutsContext } from '../../hooks/useWorkoutsContext';

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = {title, load, reps, sets};
    const options = {
        method: 'POST',
        body: JSON.stringify(workout),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const response = await fetch('http://localhost:3000/workouts', options);
    const responseJson = await response.json();

    if (!response.ok) {
        setError(responseJson.error);
    };

    if (response.ok) {
        setError(null);
        setTitle('');
        setLoad('');
        setReps('');
        setSets('');
        dispatch({type: 'CREATE_WORKOUT', payload: responseJson});
        console.log('Workout posted successfully', responseJson);
    }
  }

  return (
    <form className='create' onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>

        <label>Exercise Name:</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>

        <label>Weight (in kg):</label>
        <input type="text" onChange={(e) => setLoad(e.target.value)} value={load}/>

        <label>No. of Reps:</label>
        <input type="text" onChange={(e) => setReps(e.target.value)} value={reps}/>

        <label>No. of Sets:</label>
        <input type="text" onChange={(e) => setSets(e.target.value)} value={sets}/>

        <button>Save Workout</button>
        { error && <div className='error'>{error}</div> }
    </form>
  )
};

export default WorkoutForm;
