import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { Icon } from '@iconify/react';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleLogout = () => {
    logout();
  }
  return (
    <>
    <header>
        <div className='container'>
            <Link to='/'>
                <h1 id='main-title'>My Workout Pal <Icon icon="mdi:dumbbell" inline={true}/></h1>
            </Link>
            <nav>
              <div>
                { user && (
                <>
                  {/* <span>{user.user.username}</span> */}
                  <button id='logout-btn' onClick={handleLogout}>Logout
                  </button>
                </>
                ) }
                { !user && (
                <div>
                  <Link to='/login'>Login</Link>
                  <Link to='/register'>Register</Link>
                </div>
                )}
              </div>
            </nav>
        </div>
    </header>
    </>
  );
};

export default Navbar;
