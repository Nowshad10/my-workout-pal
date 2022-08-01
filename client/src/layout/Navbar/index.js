import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { Icon } from '@iconify/react';

const Navbar = () => {
  return (
    <header>
        <div className='container'>
            <Link to='/'>
                <h1 id='main-title'>My Workout Pal <Icon icon="mdi:dumbbell" inline={true}/></h1>
            </Link>
            <nav>
              <div>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
              </div>
            </nav>
        </div>
    </header>
  );
};

export default Navbar;
