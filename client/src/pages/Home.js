import React, { useEffect, useState } from 'react';
import WorkoutForm from '../components/WorkoutForm';
import WorkoutInfo from '../components/WorkoutInfo';

const Home = () => {

  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:3000/workouts');
      const responseJson = await response.json();

      if (response.ok) {
        setWorkouts(responseJson);
      };
    };
    fetchWorkouts();
  }, []);

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
