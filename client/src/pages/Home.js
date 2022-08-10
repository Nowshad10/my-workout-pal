import React, { useEffect } from 'react';
import WorkoutForm from '../components/WorkoutForm';
import WorkoutInfo from '../components/WorkoutInfo';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext';

const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:3000/workouts', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const responseJson = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: responseJson})
      };
    };
    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);

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
