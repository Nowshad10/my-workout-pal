import React, { useEffect } from 'react';
import WorkoutForm from '../components/WorkoutForm';
import WorkoutInfo from '../components/WorkoutInfo';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:3000/workouts');
      const responseJson = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: responseJson})
      };
    };
    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className='home'>
        <div className='workouts'>
          { workouts && workouts.map((workout) => (
            <WorkoutInfo key={workout._id} workout={workout} />
          ))}
        </div>
        <WorkoutForm />
    </div>
  );
};

export default Home;
