import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <Navbar />
      <div className='pages'>
        <Routes>
          <Route path='/' element={user ? <Home /> : <Navigate to='/login' />}/>
          <Route path='/login' element={!user ? <Login/> : <Navigate to='/'/>}/>
          <Route path='/register' element={!user ? <Register/> : <Navigate to='/'/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
