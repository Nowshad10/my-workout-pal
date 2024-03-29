import React, { useState } from 'react';
import './style.css';
import { useWorkoutsContext } from '../../hooks/useWorkoutsContext';
import { useAuthContext } from '../../hooks/useAuthContext';

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError('You must be logged in!')
      return
    }

    const workout = {title, load, reps, sets};
    const options = {
        method: 'POST',
        body: JSON.stringify(workout),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
        }
    };
    const response = await fetch('http://localhost:3000/workouts', options);
    const responseJson = await response.json();

    if (!response.ok) {
        setError(responseJson.error);
        setEmptyFields(responseJson.emptyFields);
    };

    if (response.ok) {
        setError(null);
        setTitle('');
        setLoad('');
        setReps('');
        setSets('');
        setEmptyFields([]);
        dispatch({type: 'CREATE_WORKOUT', payload: responseJson});
        console.log('Workout posted successfully', responseJson);
    }
  }

  return (
    <form className='create' onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>

        <label>Exercise Name:</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className={emptyFields.includes('title') ? 'error' : ''} />

        <label>Weight (in kg):</label>
        <input type="text" onChange={(e) => setLoad(e.target.value)} value={load} className={emptyFields.includes('load') ? 'error' : ''} />

        <label>No. of Reps:</label>
        <input type="text" onChange={(e) => setReps(e.target.value)} value={reps} className={emptyFields.includes('reps') ? 'error' : ''} />

        <label>No. of Sets:</label>
        <input type="text" onChange={(e) => setSets(e.target.value)} value={sets} className={emptyFields.includes('sets') ? 'error' : ''} />

        <button>Save Workout</button>
        { error && <div className='error'>{error}</div> }
    </form>
  )
};

export default WorkoutForm;
