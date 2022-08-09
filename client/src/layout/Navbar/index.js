import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { Icon } from '@iconify/react';
import { useLogout } from '../../hooks/useLogout';

const Navbar = () => {
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  }
  return (
    <header>
        <div className='container'>
            <Link to='/'>
                <h1 id='main-title'>My Workout Pal <Icon icon="mdi:dumbbell" inline={true}/></h1>
            </Link>
            <nav>
              <div>
                <button id='logout-btn' onClick={handleLogout}>Logout</button>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
              </div>
            </nav>
        </div>
    </header>
  );
};

export default Navbar;
