import React, { useState } from 'react'
import './style.css';
import { useRegister } from '../hooks/useRegister';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { register, error, isLoading } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, email, password)
    await register(username, email, password)
  }

  return (
    <form className='signup' onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>Username:</label>
      <input type='text' onChange={(e) => setUsername(e.target.value)} value={username}/>

      <label>Email:</label>
      <input type='text' onChange={(e) => setEmail(e.target.value)} value={email}/>

      <label>Password:</label>
      <input type='password' onChange={(e) => setPassword(e.target.value)} value={password}/>

      <button disabled={isLoading}>Sign Up!</button>
      { error && <div className='error'>{error}</div>}
    </form>
  )
}

export default Register
