import React, { useState } from 'react';
import './style.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password)
  }

  return (
    <form className='login' onSubmit={handleSubmit}>
      <h3>Login</h3>

      <label>Username:</label>
      <input type='text' onChange={(e) => setUsername(e.target.value)} value={username}/>

      <label>Password:</label>
      <input type='password' onChange={(e) => setPassword(e.target.value)} value={password}/>

      <button>Login</button>
    </form>
  )
}

export default Login
